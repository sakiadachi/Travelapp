const geonamesURL = 'http://localhost:8081/location'
const darkSkyURL = 'http://localhost:8081/forecast/'
// const darkSkyURL = 'https://api.darksky.net/forecast/'

// const post =[];

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const location = document.getElementById('location').value;
    // valueAsNumber returns milliseconds, so we divide by 1000
    const date = document.getElementById('date').valueAsNumber / 1000;
   //  console.log(location+"and"+date);

    const locationFetchUrl = `${geonamesURL}?q=${location}&time=${date}`;
    // console.log(locationFetchUrl)
    await fetch(locationFetchUrl,
        {
        method: "GET",
        })
        .then(res => {
            return res.json();
        })
        .catch(error => {
            console.error("error", error)
        })
}


export {
    handleSubmit
}

// return fetch (darkSkyURL + darkSkyApiKey + lat + "," + lng,
// {
//     method: "GET",
//     credentials: "same-origin",
//     mode: 'no-cors',
//     body: JSON.stringify(),
//     headers: {'Content-type': "application/json"}
//     }
// ).then (function (res) {
//     if(res.ok){
//         return res.json();
// } else {
//     return Promise.reject(res);
// }
// })
// .then(function (newData) {
//     const temp = newData.currently.temperature;
//     const currentWeather = newData.minutely.summery;
//     document.getElementById("weather").innerHTML  = currentWeather;
//     console.log(newData);
// })
// .catch(function (error) {
//     console.log(error)
//     document.getElementById("place").innerHTML  = "Can't find the place.";
// });