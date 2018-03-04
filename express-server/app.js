const express = require('express');
const config = require('./config.json');
const riders = require('./riders.json');
const users = require('./users.json');
const app = express();
const port = config.port || 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

var optimisedObjects = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.client.ip);
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get('/places', function (req, res) {
  res.send(Object.keys(optimisedObjects.places) || Object.keys(getPlaces()));
});

app.get('/find/:source/:destination', function (req, res) {
  res.send(findRiders(req.params.source, req.params.destination));
});

app.post('/login', function (req, res) {
  var login = req.body.user,
    user = findUser(login, ['email', 'password']),
    msg = {};

  if (user) {
    msg.status = 'ok';
    msg.user = user;
  } else {
    msg.status = 'fail';
  }

  res.send(msg);
});


app.post('/register', function (req, res) {
  var newUser = req.body.user;

  if (!findUser(newUser, ['email'])) {
    storeNewUser(newUser);
    res.send({ status: 'ok' });
  } else {
    res.send({
      status: 'fail',
      message: 'Duplicate User'
    })
  }
});


function findUser(userToCheck, paramsToMatch) {
  var foundUser = false;
  for (let user of users) {
    let isMatch = true;
    for (let param of paramsToMatch) {
      if (user[param] != userToCheck[param]) {
        isMatch = false;
      }
    }
    if (isMatch) {
      foundUser = user;
      break;
    }
  }

  return foundUser;
}

function storeNewUser(newUser) {
  users.push(newUser);

  fs.writeFile('users.json', JSON.stringify(users, null, 2), (err, data) => {
    if (err) {
      console.log(err, data);
    }

  })
}

function optimiseRiders() {
  optimisedObjects.places = getPlaces();
}

function getPlaces() {
  var places = {};

  for (let [index, rider] of riders.entries()) {
    for (let route of rider.routes) {
      if (places.hasOwnProperty(route)) {
        places[route].push(index);
      } else {
        places[route] = [index];
      }
    }
  }
  return places;
}

function findRiders(src, dst) {
  optimisedObjects.places = optimisedObjects.places || getPlaces();

  var srcRiders = optimisedObjects.places[src],
    dstRiders = optimisedObjects.places[dst],
    matchedRiders = [];

  //filter people travelling in route
  matchedRiders = srcRiders.reduce((matched, riderIdx) => {
    let riderRoutes = riders[riderIdx].routes;
    if (dstRiders.indexOf(riderIdx) > -1 && riderRoutes.indexOf(src) < riderRoutes.indexOf(dst)) {
      matchedRiders.push(riders[riderIdx]);
    }
    return matchedRiders;
  });
  return matchedRiders;
}

optimiseRiders();

app.listen(port, function () {
  console.log(`Server started on ${port}`);
});