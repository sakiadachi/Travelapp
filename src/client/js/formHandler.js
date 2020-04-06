const geonamesURL = 'http://localhost:8081/location'
const darkSkyURL = 'http://localhost:8081/forecast/'
// const darkSkyURL = 'https://api.darksky.net/forecast/'

// const post =[];

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const location = document.getElementById('location').value;
    // valueAsNumber returns milliseconds, so we divide by 1000
    let date = document.getElementById('date').valueAsNumber / 1000;
    console.log(date);
    // get current day
    let ts = Math.round((new Date()).getTime() / 1000);

    let diffDays = Math.round(Math.abs(date - ts) / 86400);
    document.getElementById('count-days').innerHTML = diffDays;
    console.log(diffDays);  

    const locationFetchUrl = `${geonamesURL}?q=${location}&days=${diffDays}`;
    // console.log(locationFetchUrl)
    await fetch(locationFetchUrl,
        {
        method: "GET",
        })
        .then(res => {
            return res.json();
        })
        // .then(content => {
        //     console.log(content);
        // })
        .then(function gotData(data) {
            updateUI('http://localhost:8080/all')
        })
        .catch(error => {
            console.error("error", error)
        })
}

const updateUI = async () =>　{
    const request = await fetch('http://localhost:8081/all')
    try　{
        const allData = await request.json();
        const lastEntry = allData[allData.length - 1];
        if (lastEntry < 0) {
            // no previous entries exist
            return;
        }
        const forecast = lastEntry.forecast;
        const forecastDate = lastEntry.forecastDate;
        const maxTemp = lastEntry.maxTemp;
        const lowTemp = lastEntry.lowTemp;
        const cityName = lastEntry.cityName;
        let placePic = lastEntry.picUrl;
        // console.log(placePic);

        document.querySelector('.forecast').innerHTML = forecast;
        document.querySelector('.max_temp').innerHTML = maxTemp;
        document.querySelector('.low_temp').innerHTML = lowTemp;
        document.querySelector('.place').innerHTML = cityName;
        document.querySelector('.date').innerHTML = forecastDate;

        var myImage = new Image(360, 200);
        myImage.src = placePic;
        document.querySelector('.entry-img').appendChild(myImage);
    

    }　catch(error)　{
        console.log("error", error);
    }
}

export {
    handleSubmit
}