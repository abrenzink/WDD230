
const spot = document.querySelector('.spotlight');


const requestURL = 'https://abrenzink.github.io/wdd230/lesson11/chamber/data.json';
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

function setListStyle(){
    let div = document.querySelector(".cards");
    let cards = document.querySelectorAll(".bCard");
    let images = document.querySelectorAll(".logoImg");
    let titles = document.querySelectorAll("section.bCard > h3");
    let p = document.querySelectorAll("section.bCard > p");
    let a = document.querySelectorAll("section.bCard > a");
    let listBtn = document.querySelector(".listBtn");
    let cardBtn = document.querySelector(".cardBtn");
  
    listBtn.classList.add('listBtn', 'activeBtn');
    cardBtn.classList.remove("activeBtn");
    div.classList.add('cards', 'listStyle');
    div.classList.remove('cardStyle');

    cards.forEach((card) => {
      card.style.margin = '0 auto';
    });

    images.forEach((img) => {
      img.style.display = 'none';
    });

    titles.forEach((title) => {
      title.style.fontSize = '.9rem';
    });

    p.forEach((p) => {
      p.style.fontSize = '.8rem';
      p.style.margin = '2px 0';
      p.style.padding = '2px 0';
    });

    a.forEach((a) => {
      a.style.fontSize = '.75rem';
    });
    
}

function setCardsStyle(){
  let div = document.querySelector(".cards");
  let cards = document.querySelectorAll(".bCard");
  let images = document.querySelectorAll(".logoImg");
  let titles = document.querySelectorAll("section.bCard > h3");
  let p = document.querySelectorAll("section.bCard > p");
  let a = document.querySelectorAll("section.bCard > a");
  let listBtn = document.querySelector(".listBtn");
  let cardBtn = document.querySelector(".cardBtn");

  cardBtn.classList.add('cardBtn', 'activeBtn')
  listBtn.classList.remove("activeBtn");
  div.classList.add('cards', 'cardStyle');
  div.classList.remove('listStyle');

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