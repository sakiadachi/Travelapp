const geonamesURL = 'http://localhost:8081/location';

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

    const newDiv = document.createElement('div');
    const att = document.createAttribute("class");  
    att.value = "card"; 
    newDiv.setAttributeNode(att);

    const p = document.createElement('p');
    p.innerText= diffDays +"DAYO";
    newDiv.appendChild(p);

    const entrySection = document.getElementById("entry");
    entrySection.appendChild(newDiv);

    


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
        .then(content => {
            console.log(content);
            for (let i = 0; i < content.length; i++) {
            const newElement = document.createElement('p');
            newElement.innerText = 'This is paragraph number ' + content[i];
            const newCard = document.createElement('div');
            newCard.appendChild(newElement);
            document.body.appendChild(newCard);


            }




        })
        // .then(function gotData(data) {
        //     updateUI()
        // })
        .catch(error => {
            console.error("error", error)
        })
}
// const updateUI = async() => {
//     const myCustomDiv = document.createElement('div');

// for (let i = 1; i <= 200; i++) {
//   const newElement = document.createElement('p');
//   newElement.innerText = 'This is paragraph number ' + i;

//   myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);
// }
// const updateUI = async () =>　{
//     const request = await fetch('http://localhost:8081/all')
//     try　{
//         const allData = await request.json();
//         const lastEntry = allData[allData.length - 1];
//         if (lastEntry < 0) {
//             // no previous entries exist
//             return;
//         }
//         const forecast = lastEntry.forecast;
//         const forecastDate = lastEntry.forecastDate;
//         const maxTemp = lastEntry.maxTemp;
//         const lowTemp = lastEntry.lowTemp;
//         const cityName = lastEntry.cityName;
//         const placePic = lastEntry.picture;
//         // console.log(placePic);

//         function addElement() {

//             const section = document.getElementById('entry');
//             const card = document.createElement('div');

//             // create a couple of elements in an otherwise empty HTML page
//             const heading = document.createElement('h1');
//             const heading_text = document.createTextNode("Your Trip to: " + cityName + " , Date: " + forecastDate);
//             heading.appendChild(heading_text);
//             card.appendChild(heading);

//             const tempP = document.createElement('p');
//             const tempP_text = document.createTextNode("Typical weather for then is: " + forecast + ", High " +maxTemp+", Low " +lowTemp);
//             tempP.appendChild(tempP_text);
//             card.appendChild(tempP);

//             section.appendChild('card');
//          }


//         // document.querySelector('.forecast').innerHTML = forecast;
//         // document.querySelector('.max_temp').innerHTML = maxTemp;
//         // document.querySelector('.low_temp').innerHTML = lowTemp;
//         // document.querySelector('.place').innerHTML = cityName;
//         // document.querySelector('.date').innerHTML = forecastDate;

//         const image = document.images[0];
//         const downloadingImage = new Image();
//         downloadingImage.onload = function(){
//             image.src = this.src;   
//         };
//         downloadingImage.src = placePic;


//     }

//     catch(error)　{
//         console.log("error", error);
//     }
// }

export {
    handleSubmit
}