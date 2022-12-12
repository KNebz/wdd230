const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=92008,us&appid=d07b07d2266cbb3af1ad3a654ea37a12&units=imperial"
const apiforecastURL="//api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594,us&appid=d07b07d2266cbb3af1ad3a654ea37a12&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('currentTemp').innerHTML=Math.round(weatherInfo.main.temp);
    document.getElementById('humidity').innerHTML=Math.round(weatherInfo.main.humidity);

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;
    document.getElementById('weather').innerHTML = `<strong>${weatherInfo.weather[0].description}</strong>`;

}); //end of "then" fat arrow function

//Go fetch it and then wait for a response.
fetch(apiforecastURL)
  .then((response) => response.json())
  .then((forecastInfo) => {
    //Once it comes back, display it to the console.
    console.log(forecastInfo);
    
    document.getElementById('currentTemp').innerHTML=Math.round(weatherInfo.main.temp);
    document.getElementById('humidity').innerHTML=Math.round(weatherInfo.main.humidity);

}); //end of "then" fat arrow function

