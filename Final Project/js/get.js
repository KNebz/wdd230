
const URL = 'https://knebz.github.io/wdd230/chamber/js/data.json';
const display = document.getElementById("spots");

function buildBusinessCards(info) {
    let data = info.businesses.filter((p) => p.memberLvl == "Gold" || p.memberLvl == "Silver");
    console.log(data);
    i=0;
    while (i<3) {
      a=data.splice(Math.floor(Math.random() * data.length), 1);
      i = i + 1;
  
};

console.log(a);
console.log(data);  


let num = 7;
data.forEach((business) => {

    // Create elements to add to the document
  let card = document.createElement("div");  
  let h3 = document.createElement('h3');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');
  let portrait = document.createElement('img');


    // Change the textContent property of the h2 element to contain the prophet's full name
  card.setAttribute("class", `box${num}`);  
  h3.textContent = `${business.name}`;
  address.textContent = `${business.address}`;
  phoneNumber.textContent = `${business.phoneNumber}`;
  website.textContent = "Visit Our Website"

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  website.setAttribute('href', business.website)
  portrait.setAttribute('src', business.imgLoc);
  portrait.setAttribute('alt', `Icon for ${business.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
  card.appendChild(h3);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website)
 

  // Add/append the existing HTML div with the cards class with the section(card)

  display.append(card);
  num += 1;
 });
}

async function getBusinesses() {
    let response = await fetch(URL);
    if (response.ok) {
      let data = await response.json();
      buildBusinessCards(data);
    } else {
      throw Error(response.statusText);
    }
  }
  
  getBusinesses();