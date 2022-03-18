const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3663517&units=imperial&appid=6e78c57483005f7c22d3a70888f92e0e";

fetch(apiURL).then((response) => response.json()).then((jsObject) => {
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const temp = jsObject.main.temp;
    const weatherDesc = jsObject.weather[0].description;
    const windSpeed = jsObject.wind.speed;

    if(temp <= 50 && windSpeed > 3) {
      const windChill = Math.round(35.74 + 0.6215 * temp - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * temp * (Math.pow(windSpeed, 0.16)));
      document.querySelector('#wind-chill').textContent = windChill;
    } else {
      document.querySelector('#wind-chill').textContent = "N/A"
    }

    document.querySelector('#current-temp').textContent = temp;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', weatherDesc);
    document.querySelector('#condition').textContent = weatherDesc;
    document.querySelector('#wind-speed').textContent = windSpeed;
    
  });