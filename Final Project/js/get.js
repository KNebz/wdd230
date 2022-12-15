
const URL = 'https://knebz.github.io/wdd230/Final%20Project/js/fruit.json';

//console.log(URL);

let dropdown1 = document.getElementById('fruit1_dropdown');
let dropdown2 = document.getElementById('fruit2_dropdown');
let dropdown3 = document.getElementById('fruit3_dropdown');
let addOption = document.createElement("option");

function makeDropDown (info) {
  for (let i=0; i < info.length; i++) {
    let fruits = info[i].name;
    //console.log(fruits);
    option = document.createElement("option");
    option.text = fruits;
    option.value = fruits;
    dropdown1.add(option);
  }
  for (let i=0; i < info.length; i++) {
    let fruits = info[i].name;
    //console.log(fruits);
    option = document.createElement("option");
    option.text = fruits;
    option.value = fruits;
    dropdown2.add(option);
  }
  for (let i=0; i < info.length; i++) {
    let fruits = info[i].name;
    //console.log(fruits);
    option = document.createElement("option");
    option.text = fruits;
    option.value = fruits;
    dropdown3.add(option);
  }

}

async function pullData() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    makeDropDown (data);
  } else {
    throw Error(response.statusText);
  }
}

pullData();

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
      alert('Form Submitted!');
    } else {
      localStorage.clickcount = 1;
    }
  }
  console.log(localStorage.clickCounter);
}

console.log(localStorage.clickCounter);
document.getElementById("orderNum").innerHTML = "You have currently ordered " + localStorage.clickcount + " specialty drinks!";
