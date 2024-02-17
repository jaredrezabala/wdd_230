const temp = document.getElementById('#temperature');
const windSpeed = document.getElementById('#wind-speed');
const windChill = document.getElementById('#wind-chill');

let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
console.log(wc);
windChill = wc;