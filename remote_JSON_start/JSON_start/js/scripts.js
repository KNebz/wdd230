//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=4150880&appid=d07b07d2266cbb3af1ad3a654ea37a12&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    

 }); //end of "then" fat arrow function



