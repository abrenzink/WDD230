

let hamBtn = document.getElementById("hamBtn");
hamBtn.onclick = toggleMenu;


function toggleMenu(){
	//here classList specifies what property of the chosen element
	//we want to affect. toggle is a key word that makes the job of
	//toggling the "responsive" name into the classList property.
	
	//console.log("WORKED!!");
	document.querySelector("#navigation").classList.toggle("open");
}