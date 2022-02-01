const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
	let inputText = input.value;

	if (inputText === "") {
		alert('Please, enter a valid chapter.');
	} else {
		const listItem = document.createElement("li");
		const delButton = document.createElement("button");
		listItem.textContent = inputText;
		delButton.textContent = "❌";
		listItem.appendChild(delButton);
		ul.appendChild(listItem);	

		delButton.addEventListener("click", () => {
			ul.removeChild(listItem);
		});
	}

	input.focus();
	input.value = "";
});
