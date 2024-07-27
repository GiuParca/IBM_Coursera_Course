function showLatLongDetails(event){
    event.preventDefault;

    const lattitude = document.getElementById('lattitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = 'e3273e91e34704e2dbbe1edc2809498f'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then( data => {
            const info = document.getElementById('info')
            info.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Lattitude: ${data.main.temp} &#8451;</p>
            <p>Longitude: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const info = document.getElementById('info');
            info.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('weatherForm').addEventListener('submit', showLatLongDetails);