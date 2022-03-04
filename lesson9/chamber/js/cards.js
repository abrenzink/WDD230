const requestURL = 'https://abrenzink.github.io/wdd230/lesson9/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    prophets.forEach(displayCards);
  });



function displayCards(business) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let title = document.createElement('h2');
 

  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
 

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${business.name} ${business.lastname}`


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', business.imageurl);
  portrait.setAttribute('alt', `Portrait of ${business.name}`);
  portrait.setAttribute('loading', 'lazy'); 

  

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}