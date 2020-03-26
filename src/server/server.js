// /* Global Variables */
var path = require('path')

const dotenv = require('dotenv')
dotenv.config();


const geonamesAPI = require('geonames.js')

var geoApi = new geonamesAPI({
    host: process.env.geonamesAPI_HOST,
    username: process.env.geonamesAPI_ID,
})

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




module.exports = require('../client/js/formHandler');