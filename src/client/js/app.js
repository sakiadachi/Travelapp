/* Global Variables */
const baseURL = 'http://api.geonames.org/'
const contains = 'contains?'
const search ='search?name=' 
const apiId = '&username=sakiadachi'

const Geonames = require('geonames.js')

// Event listener to add function to existing HTML DOM element
document.getElementById('submit').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const location = document.getElementById('location').value;
    const date = document.getElementById('deperture-date').value;
    console.log(location, date)
    getPlace(baseURL, search, location, apiId)
    // Add a data to POST request
    .then(function gotData(data){
        postData('http://localhost:8000/addPlace', {lat: data.geoname.lat});
        // updateUI('http://localhost:8000/all')
    });
}

/* Function to GET Web API Data*/
const getPlace = async (url, data) =>{

    const res = await fetch(baseURL + search + location + apiId, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
    })
    try{
        const data = await res.json();
        console.log(data)
        return data;
    }    catch(error){
        console.log("error", error)
    }
}

// /* Function to POST data */

const postData = async (url, data) =>{
    console.log(url, data)

    const response = await fetch (url,
        {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(JSON.stringify(newData));
        return newData
    } catch(error){
        console.log("error", error);
    }
}

// Update UI
// const updateUI = async () =>　{
//     const request = await fetch('http://localhost:8000/all')
//     try　{
//         const allData = await request.json();
//         const lastEntry = allData[allData.length - 1];
//         if (lastEntry < 0) {
//             // no previous entries exist
//             return;
//         }
//         document.getElementById('date').innerHTML = lastEntry.date;
//         document.getElementById('temp').innerHTML = lastEntry.temp;
//         document.getElementById('content').innerHTML = lastEntry.userResponse;
//     }　catch(error)　{
//         console.log("error", error);
//     }
// }

export { getPlace };
// export { handleSubmit };