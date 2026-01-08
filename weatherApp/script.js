// script.js

const apiKey = "6daf6afb4b9adf1c7a1c12cf9b2d43bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM elements
const searchBox = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const weatherIcon = document.getElementById('weatherIcon');

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (response.status === 404) {
            // Show error if city not found
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
            return;
        }

        const data = await response.json();

        // Update weather details
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').textContent = data.main.humidity + "%";
        document.querySelector('.wind').textContent = (data.wind.speed * 3.6).toFixed(1) + " Km/h";

        // Update weather icon
        const weatherMain = data.weather[0].main;
        if (weatherMain === "Clouds") {
            weatherIcon.src = 'images/cloudy.png';
        } else if (weatherMain === "Clear") {
            weatherIcon.src = 'images/clearr.png';
        } else if (weatherMain === "Rain") {
            weatherIcon.src = 'images/rain.jpg';
        } else if (weatherMain === "Drizzle") {
            weatherIcon.src = 'images/drizzlee.png';
        } else if (weatherMain === "Mist") {
            weatherIcon.src = 'images/mistt.png';
        } else {
            weatherIcon.src = 'images/default.png'; // fallback icon
        }

        // Show weather card and hide error
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        console.log(data); // optional for debugging

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = searchBox.value.trim();
    if (city) checkWeather(city);
});
