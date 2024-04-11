// CLOSEABLE MSG
const msg = document.querySelector(".high-temp");
msg.addEventListener('click', () => {
    msg.style.display = 'none';
});

// WEATHER INFO
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.43&lon=-86.92&units=imperial&appid=4fc3489696a2985442c614386e25746d";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.43&lon=-86.92&units=imperial&appid=4fc3489696a2985442c614386e25746d";
const temperature = document.querySelector(".temp");
const hum = document.querySelector(".humidity");
const high = document.querySelector(".h-temp");
const forecast = document.querySelector(".weather-forecast");

// async function getWeather() {
//     const response = await fetch(weatherUrl);
//     const data = await response.json();
//     displayWeather(data);
// }
// function displayWeather(data) {
//     const icon = document.createElement('img');
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     const weatherMain = data.weather[0].main;
//     icon.setAttribute('src', iconsrc);
//     icon.setAttribute('loading', 'lazy');
//     icon.setAttribute('alt', data.weather[0].weatherMain);
//     temperature.innerHTML = `${data.main.temp} &degF`;
//     hum.innerHTML = `${data.main.humidity} &degF`;
//     high.innerHTML = `${data.main["temp_max"]} &degF`;
// }
// getWeather();
async function getWeather() {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    // Create a wrapper div for the weather info
    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weather-info');

    // Create elements for weather main, description, and icon
    const mainTitle = document.createElement('h3');
    mainTitle.textContent = data.weather[0].main;

    const description = document.createElement('p');
    description.textContent = data.weather[0].description;

    const icon = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('loading', 'lazy');
    icon.style.width = '100px';
    icon.setAttribute('alt', data.weather[0].description);

    // Append weather main, description, and icon to the weather info div
    weatherInfo.appendChild(mainTitle);
    weatherInfo.appendChild(description);
    weatherInfo.appendChild(icon);

    // Append the weather info div to the weather container
    const weatherContainer = document.querySelector('.weather-container');
    weatherContainer.appendChild(weatherInfo);

    // Display additional weather data points (humidity, max temp, etc.)
    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp} °F`;
    high.innerHTML = `${data.main["temp_max"]} &degF`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity} %`;

    // Append additional weather data points to the weather container
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(humidity);
    // weatherContainer.appendChild(maxTemp);
}

getWeather();

// getWeather();

// GET NEXT DATA FORECAST TEMP AT 3PM
async function getForecast() {
    const response = await fetch(forecastUrl);
    const data = await response.json();
    displayForecast(data);
}

function nextDayForecast(forecastList) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(15, 0, 0, 0);

    const nextDayForecasts = forecastList.filter(forecast => {
        const forecastDate = new Date(forecast.dt_txt);
        return forecastDate.getDate() === tomorrow.getDate() && forecastDate.getMonth() === tomorrow.getMonth() && forecastDate.getFullYear() === tomorrow.getFullYear();
    });

    const forecastAt3PM = nextDayForecasts.find(forecast => {
        const forecastDate = new Date(forecast.dt_txt);
        return forecastDate.getHours() === 15;
    });

    if (forecastAt3PM) {
        forecast.innerHTML = `${forecastAt3PM.main.temp} &degF`;
    } else {
        console.log("No forecast available for 3 PM next day.");
    }
}

function displayForecast(data) {
    nextDayForecast(data.list);
}
getForecast();










