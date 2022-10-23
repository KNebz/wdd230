const input1 = document.querySelector('#temp1');
const input2 = document.querySelector('#windspeed1');
const windchill = document.querySelector('#windchill1');

var temp = parseFloat(input1.textContent);
var windspeed = parseFloat(input2.textContent);

wcc = 35.74 + 0.6215*temp - 35.75*(windspeed**0.16) + 0.4275*temp*(windspeed**0.16);

wccalc = Math.round(wcc);

if (temp <= 50 &&
    windspeed > 3) {
        windchill.textContent = wccalc
    } else {
        windchill.textContent = "N/A"
    }