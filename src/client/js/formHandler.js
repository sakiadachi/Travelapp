// const date = document.getElementById('deperture-date').value;

// function createFetchOptions(formPlace) {
//     return {
//         method: 'POST',
//         credentials: 'same-origin',
//         body: JSON.stringify({
//             url: formPlace
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// };

// function handleSubmit(event) {
//     event.preventDefault()

//     const formPlace =  document.getElementById('location').value;
//     fetch('http://localhost:8000/place', createFetchOptions(formPlace))
//     .then(res => {
//         return res.json();
//     })
//     .then(content => {
//         const geonameId = content.geonames.map(a => a.geonameId).join(",");
//         console.log(geonameId);
//     })
//     .catch(function (error) {
//         console.log(error)
        
//     })

// };

// export {
//     handleSubmit,
//     createFetchOptions
// }