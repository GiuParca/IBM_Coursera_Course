function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'e3273e91e34704e2dbbe1edc2809498f'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Latitude and Longitude in ${data.name}</h2>
                                  <p>Lattitude: ${data.coord.lat} &#8451;</p>
                                  <p>Longitude: ${data.coord.lon} &#8451;</p>`;

        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );