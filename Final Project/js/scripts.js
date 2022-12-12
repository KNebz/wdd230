function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

//document.querySelector(
//	"#lastModified"
//).textContent = `Last Modification: ${document.lastModified}`;

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d= new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

var yr = document.querySelector("#year");
var lastModified = document.querySelector("#lastModified");

yr.textContent = "©" + year
lastModified.textContent = "Last Modified:" + document.lastModified


let day1 = daynames[d.getDay() +1];
let day2 = daynames[d.getDay() +2];
let day3 = daynames[d.getDay() +3];

console.log(day1, day2, day3);

document.querySelector(".forecastlabel1").textContent = day1;
document.querySelector(".forecastlabel2").textContent = day2;
document.querySelector(".forecastlabel3").textContent = day3;
