// DOM element variable
const sortButton = document.getElementById('sort');

// Sort Input Array
const sortInputArray = (event) => {
	event.preventDefault();

	const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));

	const sortedValues = bubbleSort(inputValues);

	updateUI(sortedValues);
};
