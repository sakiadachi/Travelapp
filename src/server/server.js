// /* Global Variables */

const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

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
app.post('/location', async (req, res) => {
    console.log(req.body)
    NewEntry = {
        lat: req.body.geonames.lat,
    }
    projectData.push(NewEntry);
    res.send(projectData)
    console.log(projectData)
});

app.get('/location', async (request,response) => {
    const location = request.query.q;
    const time = request.query.time;
    console.log(time);

    const geoApi_url = `http://api.geonames.org/search?q=${location}&maxRows=10&username=${process.env.NGN_USERNAME}`;

    const fetch_response = await fetch(
        geoApi_url, {
            headers: {'Accept': "application/json"}
        }
    );

    // console.log(geoApi_url);
    const json = await fetch_response.json();
    // TODO handle no results
    const firstLocation = json.geonames[0];
    const lng = firstLocation.lng;
    const lat = firstLocation.lat;
    const weatherbitApiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.WEATHER_KEY}`;
    const weatherFetchResponse = await fetch(weatherbitApiUrl);
    console.log(weatherbitApiUrl)
    const weather = await weatherFetchResponse.json();
    // console.log(weather)
    const forecast = weather.hourly.summary;
    response.json(forecast);
})