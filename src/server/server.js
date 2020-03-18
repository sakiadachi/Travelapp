// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
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
app.use(express.static('client'));

/* Spin up the server*/
const port = 8000;

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
    console.log("Hi from server")
};


// POST ROUTE
app.post('/addWeather', addWeather);


function addWeather(req, res){
    res.send('Post recerived');
    console.log(req.body)
    DataCue.push(req.body);
    NewEntry = {
        date: req.body.date,
        temp : req.body.temp,
        userResponse: req.body.userResponse
    }
    
    projectData.push(NewEntry);
    res.send(projectData)
    console.log(projectData)
}




