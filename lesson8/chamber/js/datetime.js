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

const popup = document.querySelector('#popup');

const closeButton = document.querySelector('#closePopup');


if(closeButton !== null && popup !== null){
	closeButton.onclick = hideElement;

	if(weekDay == 'Tuesday' || weekDay == 'Wednesday'){
		showElement();
	} else {
		hideElement();
	}
}


function hideElement(){
	popup.setAttribute('class', 'hidden');
}

function showElement(){
	popup.setAttribute('class', 'shown');
}

