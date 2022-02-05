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

const divList = document.querySelectorAll("div");

const popUp = divList[0];
const closeButton = document.querySelector('button');

if(weekDay == "Tuesday" || weekDay == "Wednesday"){
	showElement();
} else {
	hideElement();
}

document.getElementById("currentDate").textContent = fulldate;
document.getElementById("currentYear").textContent = year;
document.getElementById("lastUpdate").textContent = lastUpdate;

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;
closeButton.onclick = hideElement;


function hideElement(){
	popUp.setAttribute('class', 'hidden');
}

function showElement(){
	popUp.setAttribute('class', 'shown');
}

function toggleMenu(){
	//here classList specifies what property of the chosen element
	//we want to afect. toggle is a key word that makes the job of
	//toggling the "responsive" name into the classList property.
	
	//console.log("WORKED!!");
	document.getElementById("navigation").classList.toggle("open");
}
