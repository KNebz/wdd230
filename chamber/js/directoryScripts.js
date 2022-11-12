
const requestURL = 'js/business.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const bussinesses = jsonObject['bussinesses'];
    bussinesses.forEach(displayBusiness);
  });

function displayBusiness(business) {
    // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('p');
  let portrait = document.createElement('img');


    // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${business.name}`;
  address.textContent = `${business.address}`;
  phoneNumber.textContent = `${business.phoneNumber}`;
  website.textcontent = `${business.website}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', business.imgLoc);
  portrait.setAttribute('alt', `Icon for ${business.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(`<a><href=${website}></a>`)
 

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);

}