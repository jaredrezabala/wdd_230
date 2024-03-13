const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={-0.88}&lon={-79.48}&units=imperial&appid={4fc3489696a2985442c614386e25746d}';
const weatherIcon = document.querySelector('#weather-icon');



async function getWeather() {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    console.log(data);
}


getWeather();