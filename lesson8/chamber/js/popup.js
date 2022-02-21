const divList = document.querySelectorAll('div');

const popUp = divList[0];
const closeButton = document.querySelector('button');

closeButton.onclick = hideElement;

if(weekDay == 'Tuesday' || weekDay == 'Wednesday'){
	showElement();
} else {
	hideElement();
}


function hideElement(){
	popUp.setAttribute('class', 'hidden');
}

function showElement(){
	popUp.setAttribute('class', 'shown');
}

