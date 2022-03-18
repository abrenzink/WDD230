
const spot = document.querySelector('.spotlight');
const requestURL = 'https://abrenzink.github.io/wdd230/lesson11/chamber/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    business.forEach(displayCards);
  });


function displayCards(business) {
  let card = document.createElement('section');
  let logo = document.createElement('img');
  let title = document.createElement('h3');
  let status = document.createElement('h4');

  card.className = 'spotCard';
  logo.className = 'logo';
  logo.setAttribute('src', business.logourl);
  logo.setAttribute('alt', `Logo of ${business.name}`);
  logo.setAttribute('loading', 'lazy');
 
  
  card.appendChild(logo);
  card.appendChild(title);
  card.appendChild(status);

  title.textContent = `${business.name}`;
  status.textContent = `${business.status} MEMBER`;

  // Add/append the existing HTML div with the cards class with the section(card)
  spot.appendChild(card);

  setCardsStyle();
}

function setCardsStyle(){
  let div = document.querySelector(".spotlight");
  let cards = document.querySelectorAll(".spotCard");
  let images = document.querySelectorAll(".logo");
  let titles = document.querySelectorAll("section.spotCard > h4");
  let p = document.querySelectorAll("section.spotCard > p");
  let a = document.querySelectorAll("section.spotCard > a");

  cards.forEach((card) => {
    card.style.margin = '20px auto';
  });

  images.forEach((img) => {
    img.style.display = 'block';
  });

  titles.forEach((title) => {
    title.style.fontSize = '1rem';
  });

  p.forEach((p) => {
    p.style.fontSize = '1rem';
    p.style.margin = '2px 0';
    p.style.padding = '2px 0';
  });

  a.forEach((a) => {
    a.style.fontSize = '1rem';
  });

}