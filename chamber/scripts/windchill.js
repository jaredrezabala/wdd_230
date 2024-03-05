
var temp = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var windChill = document.getElementById('windchill');

function calculateWindChill(temperature, speed) {
    if (temperature <= 50 && speed > 3.0) {
        var chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
        chill = Math.round(chill * 100) / 100;
        windChill.textContent = chill;
    } else {
        document.getElementById('windchill').textContent = "Loading..."
    }
}

calculateWindChill(temp.textContent, windSpeed.textContent);

