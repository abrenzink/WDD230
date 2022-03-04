const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });



function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let portrait = document.createElement('img');
  let h2 = document.createElement('h2');
  let lifeSpan = document.createElement('p');
  let birthPlace = document.createElement('p');

  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(lifeSpan);
  card.appendChild(birthPlace);

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`
  lifeSpan.textContent = `Birth date: ${prophet.birthdate} | Death date: ${prophet.death}`
  birthPlace.textContent = `Birth Place: ${prophet.birthplace}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}, the ${prophet.order} Latter-day Saint Prophet`);
  portrait.setAttribute('loading', 'lazy');

  

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}