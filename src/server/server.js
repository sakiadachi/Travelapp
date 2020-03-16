// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
     // Callback to debug
    console.log(`running on localhost: ${port}`);
};



// Initialize all route with a callback function
app.get('/all', sendData)

// Callback function to complete GET '/all'
function sendData(req, res) {
    res.send(projectData);
};


// POST ROUTE
app.post('/addWeather', addWeather);


function addWeather(req, res){
    console.log(req.body)
    NewEntry = {
        date: req.body.date,
        temp : req.body.temp,
        userResponse: req.body.userResponse
    }
    
    projectData.push(NewEntry);
    res.send(projectData)
    console.log(projectData)
}






