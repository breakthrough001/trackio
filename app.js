// Selectors
const progressBar = document.querySelector('.progress-done');
const progressBarPercentage = document.querySelector('.progressBarPercentage');

const userInput = document.querySelector('.user-input');
const inputList = document.querySelector('.input-list');
const submitButton = document.querySelector('button');

progressBar.style.opacity = 0;

// Select Data Attribute
let value = parseInt(progressBarPercentage.innerHTML.slice(0, -1));

// Event Listeners
submitButton.addEventListener('click', addUserInput);

// Add User Input to List
function addUserInput(event) {
  event.preventDefault();

  const newLI = document.createElement('li');
  const newUserInput = `$${userInput.value}`;
  newLI.innerText = newUserInput;
  inputList.appendChild(newLI);

  // Change data-value
  value = parseInt(userInput.value);
  progressBarPercentage.innerHTML = value + '%';

  // Set width of progress bar to user input
  progressBar.style.width = value + '%';
  // Set padding left on percent number above progress bar
  progressBarPercentage.style.paddingLeft = value - 4 + '%';
  progressBar.style.opacity = 1;
  // Reset input value
  userInput.value = '';
}

// progress bar is gonna be an array, each time user adds a number it is pushed to end of array and then summed up -- if they delete one it is sliced or whatever them summed up again
// if no value entered make error message pop up Enter Value
