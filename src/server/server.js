// /* Global Variables */
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

var path = require('path')
var filename = path.basename('../dist/index.html')
console.log(filename)

// Setup empty JS object to act as endpoint for all routes
let projectData = [];

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

function listening() {
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


// GET route for api calls
app.get('/location', async (request, response) => {
    const location = request.query.q;
    const days = request.query.days;

    const geoApiUrl = `http://api.geonames.org/search?q=${location}&maxRows=10&username=${process.env.NGN_USERNAME}`;

    const fetch_response = await fetch(
        geoApiUrl, {
            headers: {
                'Accept': "application/json"
            }
        }
    );

    const json = await fetch_response.json();
    // TODO handle no results
    const firstLocation = json.geonames[0];
    const lng = firstLocation.lng;
    const lat = firstLocation.lat;

    const weatherbitApiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.WEATHER_KEY}`;
    const weatherFetchResponse = await fetch(weatherbitApiUrl);
    const weather = await weatherFetchResponse.json();

    const pixabayApiUrl = `https://pixabay.com/api/?key=${process.env.PIX_KEY}&q=${location}&image_type=photo&orientation=horizontal&category=places`;
    const pixabayFetchResponse = await fetch(pixabayApiUrl);
    const placePic = await pixabayFetchResponse.json();
    const placePicFirstResult = placePic.hits[0];

    const newEntry = getNewEntry(days, weather, placePicFirstResult);
    projectData.push(newEntry);
    response.json(newEntry);
})


function getNewEntry(days, weather, placePicFirstResult) {
    return {
        forecast: weather.data[days].weather.description,
        lowTemp: weather.data[days].low_temp,
        maxTemp: weather.data[days].max_temp,
        cityName: weather.city_name,
        forecastDate: weather.data[days].datetime,
        picture: placePicFirstResult.webformatURL,
    }
};

module.exports ={getNewEntry}
