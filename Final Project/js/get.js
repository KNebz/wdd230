
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
    jsondata = data;
  } else {
    throw Error(response.statusText);
  }
}

pullData();

var form = document.getElementById("orderForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

let submitBtn = document.getElementById("submitBtn");
const formOutput = document.getElementById("formInfo")

submitBtn.addEventListener("click", (event) => {
    var fName = form.elements["fname"].value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;
    var fruit1 = form.elements["fruit1"].value;
    var fruit2 = form.elements["fruit2"].value;
    var fruit3 = form.elements["fruit3"].value;
    var special = form.elements["special"].value
    index1 = jsondata.findIndex(function(item, i) {
      return item.name === fruit1
    });
    index2 = jsondata.findIndex(function(item, i) {
      return item.name === fruit2
    });
    index3 = jsondata.findIndex(function(item, i) {
      return item.name === fruit3
    });
    console.log(index1, index2, index3);
    carbohydrates1 = jsondata[index1].nutritions.carbohydrates;
    protein1 = jsondata[index1].nutritions.protein;
    fat1 = jsondata[index1].nutritions.fat;
    calories1 = jsondata[index1].nutritions.calories;
    sugar1 = jsondata[index1].nutritions.sugar;
    carbohydrates2 = jsondata[index2].nutritions.carbohydrates;
    protein2 = jsondata[index2].nutritions.protein;
    fat2 = jsondata[index2].nutritions.fat;
    calories2 = jsondata[index2].nutritions.calories;
    sugar2 = jsondata[index2].nutritions.sugar;
    carbohydrates3 = jsondata[index3].nutritions.carbohydrates;
    protein3 = jsondata[index3].nutritions.protein;
    fat3 = jsondata[index3].nutritions.fat;
    calories3 = jsondata[index3].nutritions.calories;
    sugar3 = jsondata[index3].nutritions.sugar;
    totalCarbohydrates = Math.round((carbohydrates1 + carbohydrates2 + carbohydrates3)*10)/10;
    totalProtein = Math.round((protein1 + protein2 + protein3)*10)/10;
    totalFat = Math.round((fat1 + fat2 + fat3)*10)/10;
    totalCalories = Math.round((calories1 + calories2 + calories3)*10)/10;
    totalSugar = Math.round((sugar1 + sugar2 + sugar3)*10)/10;
    formOutput.innerHTML = "First Name:" + fName + "<br>Email: " + email + "<br>Phone Number: " + phone + "<br>Fruit 1: " + fruit1 + "<br>Fruit 2: " + fruit2 + "<br>Fruit 3: " + fruit3 + "<br>Speical Instructions: " + special + "<br>Date: " + fulldate + "<br>Total Carbohydrates: " + totalCarbohydrates + "<br>Total Protein: " + totalProtein + "<br>Total Fat: " + totalFat + "<br>Total Calories: " + totalCalories + "<br>Total Sugar: " + totalSugar;
});


