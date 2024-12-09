document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'da04e8aacd8033a46459b3341c1f26c7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const weatherDetails = document.getElementById('weatherDetails');
        weatherDetails.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      })
      .catch(error => {
        alert(error.message);
      });

      console.log("JavaScript is working!");
  });