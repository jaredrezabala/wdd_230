const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-0.88&lon=-79.48&units=imperial&appid=4fc3489696a2985442c614386e25746d';
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#current-temp');
const tempCondition = document.querySelector('#condition');



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
    weatherIcon.setAttribute('alt', data.weather[0].description);
    tempCondition.textContent = `${desc}`;

}

getWeather();