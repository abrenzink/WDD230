let imagesToLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold:0,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
      image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imageOptions);

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


/*--------------------------------------current date--------------------------------------- */

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();
const weekDay = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const monthDay = d.getDate();
const year = d.getFullYear();

const lastUpdate = document.lastModified;
const fulldate = `${weekDay}, ${monthName} ${monthDay}, ${year}`;

document.getElementById("currentDate").textContent = fulldate;
document.getElementById("currentYear").textContent = year;
document.getElementById("lastUpdate").textContent = lastUpdate;



/* -------------------------------------Toggle Menu-------------------------------------- */

const toggleButton = document.getElementsByClassName("hamBtn");
toggleButton.onclick = toggleMenu;

function toggleMenu(){
	//here classList specifies what property of the chosen element
	//we want to afect. toggle is a key word that makes the job of
	//toggling the "responsive" name into the classList property.
	
	//console.log("WORKED!!");
	document.getElementsByClassName("navigation").classList.toggle("open");
}
