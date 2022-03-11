const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=4855951&units=imperial&appid=6e78c57483005f7c22d3a70888f92e0e";

fetch(apiURL).then((response) => response.json()).then((jsObject) => {
    console.log(jsObject.weather[0].icon);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const weatherDesc = jsObject.weather[0].description;

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', weatherDesc);
    document.querySelector('figcaption').textContent = weatherDesc;
  });