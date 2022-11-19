const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=32709,us&appid=d07b07d2266cbb3af1ad3a654ea37a12&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('currentTemp').innerHTML=Math.round(weatherInfo.main.temp);
    document.getElementById('windSpeed1').innerHTML=Math.round(weatherInfo.wind.speed);

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;
    document.getElementById('weather').innerHTML = `<strong>${weatherInfo.weather[0].description}</strong>`;

 }); //end of "then" fat arrow function

const input1 = document.querySelector('#currentTemp');
const input2 = document.querySelector('#windSpeed1');
const windchill = document.querySelector('#windchill1');

var temp = parseFloat(input1.textContent);
var windspeed = parseFloat(input2.textContent);

console.log(temp);
console.log(windspeed);

wcc = 35.74 + 0.6215*temp - 35.75*(windspeed**0.16) + 0.4275*temp*(windspeed**0.16);

wccalc = Math.round(wcc);

if (temp <= 50 &&
    windspeed > 3) {
        windchill.textContent = wccalc
    } else {
        windchill.textContent = "N/A"
    }