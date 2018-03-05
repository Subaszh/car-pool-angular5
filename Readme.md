# Zeppelin - A Ride Sharing app
 Zeppelin is a ride sharing app written by **Subash Chandran Thirumaran** for the purpose of learning and understanding of Angular 5 (Angular 2+).

The Project is available in [Zeppelin](https://github.com/Subaszh/zeppelin-ride-sharing.git) Github page.

##  Technology Stack

 - Angular 5 for Front-end
 - Node 6.11.5 (x64) for Back-end Environment 
 - Express 4 as Back-end Server
 - SASS for CSS pre-processor

## Setup Zeppelin for Demo

The Application consists of two parts – **Angular 5 Client** and **Express Server.** It is required to setup Client and Server separately for development and demo. The build is not yet setup for production.

To Run Zeppelin Application - `npm run server | npm run client`

Note: Please setup **NodeJs** and **SaSS** before  running these commands

## Login  Screen

Below is the list of Valid logins:
 - admin@m.com/password
 - iron@m.com/tonystark
 - spidey@m.com/peterparker
 - wwoman@m.com/diana
 - hulk@m.com/brucebanner
 - hawk@m.com/clintbarton
 
 Please  feel free to create your own login using register page.  On successful login, user will be redirected to Ride Finder page.

## Register Page

There are 5 input fields that has to be filled in Register Page

 - Full Name (*minimum 5 Characters*)
 - Email (*basic valid  email format*)
 - Mobile (*Valid Indian mobile number*)
 - Password
 - Password Confirmation (*value same as password*)

On successful registration, user will be redirected to Ride Finder page.

## Ride Finder Page
There are two select fields in this page

 - Source 
 - Destination

The User can select two different locations and click **Find Ride** button. If the source and destination are same, then **Find Ride** button will be disabled.

If **No Rides** are found for given source-destination combo, A modal popup will be displayed showing the unavailability info.

The rides if found, will be displayed as a card showing driver and car info. The User can hover over the respecting cards and find out the real time location of the car in the map.

The User can select a car and then rider confirmation message will be displayed.



