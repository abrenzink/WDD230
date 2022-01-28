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
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDay()} ${monthName} ${year}`;


document.getElementById("date").textContent = fulldate;


function toggleMenu(){
	//here classList specifies what property of the chosen element
	//we want to afect. toggle is a key word that makes the job of
	//toggling the "responsive" name into the classList property.
	

	//console.log("WORKED!!");
	document.getElementById("navigation").classList.toggle("open");
}

const x = document.getElementById('hamBtn');
x.onclick = toggleMenu;