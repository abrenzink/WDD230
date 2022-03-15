const numDays = document.querySelector("#numDays");

let lastVisit = Number(window.localStorage.getItem("lastVisit"))

if (lastVisit === 0) {
	numDays.textContent = `This is your first visit!`
	
} else {
	let thisVisit = Date.now();
	let timeDiff = thisVisit - lastVisit;
	//let diffDays = timeDiff / 1000;  this is for seconds
	
	let diffDays = timeDiff / (1000 * 3600 * 24); 
	numDays.textContent = `${diffDays.toFixed(1)}`
}

localStorage.setItem("lastVisit", JSON.stringify(Date.now()));