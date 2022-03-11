const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=q=Fairbanks&appid=6e78c57483005f7c22d3a70888f92e0e";

fetch(apiURL).
then((response) => response.json()).then((jsObject) => {
    console.log(jsObject);
  });