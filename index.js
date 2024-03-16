// DOM element variable
const sortButton = document.getElementById('sort');

// Sort Input Array
const sortInputArray = (event) => {
	event.preventDefault();

	const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));

	const sortedValues = bubbleSort(inputValues);

	updateUI(sortedValues);
};

// Update UI
const updateUI = (array = []) => {
	array.forEach((num, i) => {
		const outputValueNode = document.getElementById(`output-value-${i}`);
		outputValueNode.innerText = num;
	});
};

// Bubble Sort
const bubbleSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
};

// Click Event Listener
sortButton.addEventListener('click', sortInputArray);
