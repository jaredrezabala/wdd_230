const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=imperial&appid=4fc3489696a2985442c614386e25746d';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-0.88&lon=-79.48&units=imperial&appid=4fc3489696a2985442c614386e25746d';
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#current-temp');
const tempCondition = document.querySelector('#condition');
const tempForecast = document.querySelector('#forecast');


async function getWeather() {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    temperature.innerHTML = `${Math.trunc(data.main.temp)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('alt', data.weather[0].description);
    tempCondition.textContent = `${desc}`;

}

async function getForecast() {
    const forecastResponse = await fetch(forecast);
    const forecastData = await forecastResponse.json();
    displayForecast(forecastData);
}

function displayForecast(forecastData) {
    const threeDayForecast = forecastData.list.filter(item => item.dt_txt.includes('15:00:00'));
    let day = 0;
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    threeDayForecast.forEach(forecastDay => {
        const d = new Date(forecastDay.dt_txt);
        const dayOfWeek = weekDays[d.getDay()];
        const forecastTemp = forecastDay.main.temp;
        const iconsrc = `https://openweathermap.org/img/w/${forecastDay.weather[0].icon}.png`;
        const icon = document.createElement('img');
        icon.setAttribute('src', iconsrc);
        const forecastItem = document.createElement('p');
        forecastItem.textContent = `${dayOfWeek}: ${Math.trunc(forecastTemp)} °F`;
        forecastItem.appendChild(icon);
        tempForecast.appendChild(forecastItem);
        day++;
    });
}
getForecast();
getWeather();


// BANNER 
document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, 2 for Tuesday, etc.

    // Check if it's Monday, Tuesday, or Wednesday
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById("chamberBanner").style.display = "block";
    }

    // Close banner functionality
    document.getElementById("closeBannerBtn").addEventListener("click", function () {
        document.getElementById("chamberBanner").style.display = "none";
    });
});
