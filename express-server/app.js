const express = require('express');
const config = require('./config.json');
const riders = require('./riders.json');
const app = express();
const port = config.port || 3000;

var optimisedObjects = {};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.client.ip);
  next();
});

app.get('/places', function (req, res) {
  res.send(Object.keys(optimisedObjects.places) || Object.keys(getPlaces()));
});

app.get('/find/:source/:destination', function (req, res) {
  res.send(findRiders(req.params.source, req.params.destination));
});

optimiseRiders();

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

app.listen(port, function () {
  console.log(`Server started on ${port}`);
});