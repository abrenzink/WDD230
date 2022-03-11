const numDays = document.querySelector("#numDays");

let lastVisit = Number(window.localStorage.getItem("lastVisit"))

if (lastVisit !== 0) {
	numDays.textContent = `This is your first visit!`
	console.log(numDays)
} else {
	let thisVisit = Date.now();
	let timeDiff = Math.abs(thisVisit.getTime() - lastVisit.getTime());
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	console.log(diffDays)
	numDays.textContent = `${diffDays}`
}

localStorage.setItem("lastVisit", JSON.stringify(Date.now()));