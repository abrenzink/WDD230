
const listBtn = document.querySelector('.listBtn');
const cardBtn = document.querySelector('.cardBtn');


const requestURL = 'https://abrenzink.github.io/wdd230/lesson9/chamber/data.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['business'];
    prophets.forEach(displayCards);
  });


function displayCards(business) {
  let card = document.createElement('section');
  let logo = document.createElement('img');
  let title = document.createElement('h3');
  let adress = document.createElement('p');
  let phone = document.createElement('p');
  let site = document.createElement('a');
  

  card.className = 'bCard';
  logo.className = 'logoImg';
  logo.setAttribute('src', business.logourl);
  logo.setAttribute('alt', `Logo of ${business.name}`);
  logo.setAttribute('loading', 'lazy');
  site.setAttribute("href", business.site); 
  site.setAttribute("target", "_blank"); 
 
  
  card.appendChild(logo);
  card.appendChild(title);
  card.appendChild(adress);
  card.appendChild(phone);
  card.appendChild(site);

  title.textContent = `${business.name}`;
  adress.textContent = `${business.adress}`;
  phone.textContent = `Phone: ${business.phone}`;
  site.textContent = `${business.site}`;

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
