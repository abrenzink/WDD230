const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
	let inputText = input.value;

	if (inputText === "") {
		alert('Enter a valid chapter. 😃');
	} else {
		const listChapter = document.createElement("li");
		const deleteButton = document.createElement("button");

		listChapter.textContent = inputText;
		deleteButton.textContent = "❌";
		
		listChapter.appendChild(deleteButton);
		ul.appendChild(listChapter);	

		deleteButton.addEventListener("click", () => {
			ul.removeChild(listChapter);
		});
	}

	input.focus();
	input.value = "";
});
