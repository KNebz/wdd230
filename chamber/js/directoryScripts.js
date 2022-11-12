
const requestURL = 'https://knebz.github.io/wdd230/chamber/js/business.json';
const cards = document.querySelector('.grid', '.list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const businesses = jsonObject['businesses'];
    console.table(businesses);
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
    // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');
  let portrait = document.createElement('img');


    // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${business.name}`;
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
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website)
 

  // Add/append the existing HTML div with the cards class with the section(card)
  document.getElementById("business").appendChild(card);

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#business");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
