// import { json } from "express";

/* Function called by event listener */
// function getImage(event){
//     event.preventDefault()

//     const location = document.getElementById('location').value;

//     function createURL(URL) { 
//         event.preventDefault()

//         var pixabayApiKey = '15691615-b0db53ac140f2e0079db199ff'
//         var pixabayURL = 'https://pixabay.com/api/?key=' + pixabayApiKey
//         var keyword = '&q=' + encodeURIComponent(value) ;
//         var option = 'image_type=photo&orientation=horizontal&per_page=1'

//         var URL = pixabayURL + keyword +location + option;
//         return URL;

//         console/
// };


// }
// var pixabayApiKey = '15691615-b0db53ac140f2e0079db199ff'
// var pixabayURL = 'https://pixabay.com/api/?key=' + pixabayApiKey
// var keyword = '&q=' + encodeURIComponent(value) ;
// var option = 'image_type=photo&orientation=horizontal&per_page=1'

// /* Function to GET Web API Data*/
// const getImage = async (url, data) => {

//     const res = await fetch(pixabayURL + keyword + location + option, {
//             method: 'GET',
//             credentials: 'same-origin',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(data),
//     })
//     try{
//         const data = await res.json();
//         console.log(data)
//         return data;
//     }    catch(error){
//         console.log("error", error)
//     }
// }

// /* Function to POST data */

// const postData = async (url, data) =>{
//     console.log(url, data)

//     const response = await fetch (url,
//         {
//             method: 'POST',
//             credentials: 'same-origin',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(data),
//     });

//     try {
//         const newData = await response.json();
//         console.log(JSON.stringify(newData));
//         return newData
//     } catch(error){
//         console.log("error", error);
//     }
// }

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

// export { getImage };
// export { handleSubmit }

const newEntry = document.createElement('div');
const newPlace = document.querySelector('p');

newEntry.appendChild(newPlace)
