// /* Global Variables */

const dotenv = require('dotenv')
dotenv.config();

/* geonames API */
"use strict";

var request = require('request');
var extend = require('util')._extend;
var xml2js = require('xml2js');

const Geonames = require('geonames.js')
const geonames = new Geonames({
    username: process.env.NGN_USERNAME,
    lan: 'en',
    encoding: 'JSON'
});
console.log(process.env.NGN_USERNAME);

module.exports = function (config) {
    var geonames = {};
        //init
        geonames._username = config.username || process.env.NGN_USERNAME;
        geonames._endpoint = config.endpoint || 'http://api.geonames.org/search/q=';
        geonames._language = config.language || 'en';
        geonames._country = config.country || 'UK';
        geonames._charset = config.charset || 'UTF-8';
        geonames._postCodeDefaults = {
            country :  geonames._country,
            maxRows :  5,
            charset : geonames._charset,
            username : geonames._username,
            lang : geonames._language,
        };
}

/* darkSkyAPI */

/*PIXABay API */

var path = require('path')
var filename = path.basename('../dist/index.html')
console.log(filename)



// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


/* Spin up the server*/
const port = 8081;

const server = app.listen(port, listening);
 function listening(){
     // Callback to debug
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function
app.get('/all', sendData)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// Callback function to complete GET '/all'
function sendData(req, res) {
    res.send(projectData);
};


// POST ROUTE for geoname api
app.post('/addPlace', addPlace);

function addPlace(req, res){
    console.log(req.body)
    NewEntry = {
        lat: req.body.geonames.lat,
    }
    projectData.push(NewEntry);
    res.send(projectData)
    console.log(projectData)
};



