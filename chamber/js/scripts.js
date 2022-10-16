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

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 1 ||
    dayNumber == 2) {
    console.log("Today is Monday or Tuesday")
    element.classList.add("showme")
} else {
    console.log("Today is not Monday or Tuesday")
    element.classList.add("hideme")
}


