// const geonamesURL = 'http://api.geonames.org/search?q=';
// const geonamesApiId = '&maxRows=10&username=sakiadachi';

// const darkSkyURL = 'https://api.darksky.net/forecast/';
// const darkSkyKey = '805a9b05d34f4086ec95f0d2f6776e1d/';

let post;

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const location = document.getElementById('location').value;
    console.log(location)

    fetch(geonamesURL + location + geonamesApiId,
        {
        method: "GET",
        headers: {'Accept': "application/json"}
        }
        ).then(res => {
            return res.json();
        })
        .then(content => {
            post = content
            console.log(content);
            // const round = (a, b) => {return Math.round(a * 10 ^ b)/(10 ^ b)}
            // const lng = content.geonames.map(a => a.lng).join(", ");
            const lng = parseFloat(content.geonames[0].lng).toFixed(3);
            const lat = parseFloat(content.geonames[0].lat).toFixed(3);
            const countryName = content.geonames[0].countryName;
            console.log(lng+ "," + lat + "," + countryName);
            return fetch (darkSkyURL + darkSkyKey + lat + "," + lng,
            {
                method: "GET",
                credentials: "same-origin",
                mode: 'no-cors',
                body: JSON.stringify(),
                headers: {'Content-type': "application/json"}
                }
            ).then (function (res) {
                if(res.ok){
                    return res.json();
            } else {
                return Promise.reject(res);
            }
            })
            .then(function (newData) {
                const temp = newData.currently.temperature;
                const currentWeather = newData.minutely.summery;
                console.log(newData);
            })
            .catch(function (error) {
                console.log(error)
                document.getElementById("place").innerHTML  = "Can't find the place.";
            });
        })



        // fetch (darkSkyURL + darkSkyKey + lat + "," + lng,
        // {
        //     method: "GET",
        //     headers: {'Accept': "application/json"}
        //     }
        // ).then (res => {
        //     return res.json();
        // })
        // .then(weatherData => {
        //     const temp = weatherData.currently.temperature;
        //     const currentWeather = weatherData.minutely.summery;
        //     console.log(temp, currentWeather);
        // })
        // .catch(function (error) {
        //     console.log(error)
        //     document.getElementById("place").innerHTML  = "Can't find the place.";
        // });
        
};



// let x = setInterval (function() {
//     const dateFuture = document.getElementById('date').valueAsDate;
//     console.log(dateFuture)

//     let dateNow = new Date().getTime(); //get Today
//     let distance = dateFuture - dateNow;
    
//     let days = Math.floor(distance / (1000*60*60*24));
//     let hours = Math.floor((distance % (1000*60*24*24)) / (1000*60*60));
//     let minutes = Math.floor((distance / (1000*60*60)) / (1000*60));
//     let seconds = Math.floor((distance % (1000*60)) / 1000);
    
//     document.getElementsByClassName("count-days").innerHTML = days + "days"+ hours + minutes + seconds;

//     if(distance < 0) { 
//         clearInterval(x);
//         document.getElementsByClassName("count-days").innerHTML = "Finished"
//     }
// }, 1000);

let d = new Date();
let today = d.getTime()


function getCount(){
    const dateFuture = document.getElementById('date').valueAsDate;
    console.log(dateFuture)

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    function showRemaining() {
        let distance = dateFuture - today;

        console.log(distance);
        if(distance < 0) {
            document.getElementById("count-days").innerHTML = "Passed!";
            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.getElementById("count-days").innerHTML = days + " days ";
        document.getElementById("count-days").innerHTML = hours + " hours ";
        
    }


    // const msPerDay = 24*60 * 60*1000;
    // const timeLeft = (dateFuture.getTime() - today.getTime());


}
 
export {
    handleSubmit,
    getCount
};
