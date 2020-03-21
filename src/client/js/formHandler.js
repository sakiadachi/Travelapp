function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    console.log(location, date)

    fetch('http://api.geonames.org/'+ 'search?name=' +location + '&username=sakiadachi',
        {
        method: "GET",
        //mode: 'no-cors',
        //credentials: "same-origin",
        //body: JSON.stringify(),
        headers: {'Accept': "application/json"}
        }
        ).then(res => {
            return res.json();
        })
        .then(content => {
            console.log(content);
            const lat = content.geonames.map(a => a.lat).join(", ");
            console.log(lat);
            document.getElementsByClassName("place").innerHTML = 'Latitude: ' +lat;
        })
        .catch(function (error) {
            console.log(error)
            document.getElementsByClassName("place").innerHTML  = "Can't find the place.";
        });
        
};

export {
    handleSubmit
};
