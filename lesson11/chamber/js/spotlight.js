
const spot = document.querySelector('.spotlight');
const requestURL = 'https://abrenzink.github.io/wdd230/lesson11/chamber/data.json';

let members = [];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];

    business.forEach(getStatus);
    
    let spotMembers = getMembers(members);
    console.log(spotMembers);

    spotMembers.forEach(displayCards);

  });

function getStatus(business){
  if(business.status !== "Bronze"){
    members.push(business);
  }
}

function getMembers(array) {

  const n = 3;
  const sample = array
  .map(x => ({ x, rand: Math.random() }))
  .sort((a, b) => a.rand - b.rand)
  .map(a => a.x)
  .slice(0, n);

  return sample;
}

function displayCards(business) {
 
  let card = document.createElement('section');
  let link = document.createElement('a');
  let logo = document.createElement('img');
  let title = document.createElement('h3');
  let status = document.createElement('h4');

  card.className = 'spotCard';
  logo.className = 'logo';
  link.setAttribute('href', business.site);
  link.setAttribute('target', '_blank');
  logo.setAttribute('src', business.logourl);
  logo.setAttribute('alt', `Logo of ${business.name}`);
  logo.setAttribute('loading', 'lazy');
  title.textContent = `${business.name}`;
  status.textContent = `${business.status} MEMBER`;
  
  card.appendChild(link);
  link.appendChild(logo);
  link.appendChild(title);
  link.appendChild(status);


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