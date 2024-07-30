function showLatLongDetails(event){
    event.preventDefault;

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = 'e3273e91e34704e2dbbe1edc2809498f'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then( data => {
            const info = document.getElementById('info')
            info.innerHTML = `<h2>Latitude and Longitude in ${data.name}</h2>
            <p>Latitude: ${data.coord.lat} &#8451;</p>
            <p>Longitude: ${data.coord.lon} &#8451;</p>`;
        })
        .catch(error => {
            console.error('Error fetching latitude and longitude:', error);
            const info = document.getElementById('info');
            info.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('weatherForm').addEventListener('submit', showLatLongDetails);
console.log(info)