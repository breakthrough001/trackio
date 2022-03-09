// Selectors
const progressBar = document.querySelector('.progress-done');
const progressBarPercentage = document.querySelector('.progressBarPercentage');

const userInput = document.querySelector('.user-input');
const inputList = document.querySelector('.input-list');
const submitButton = document.querySelector('button');
let inputValues = [];

// Select Data Attribute
let value = parseInt(progressBarPercentage.innerHTML.slice(0, -1));

// Event Listeners
submitButton.addEventListener('click', addUserInput);

// Progress Bar Default State
progressBar.style.opacity = 0;

// Add User Input to List
function addUserInput(event) {
  event.preventDefault();
  const newLI = document.createElement('li');
  const newUserInput = `$${userInput.value}`;
  newLI.innerText = newUserInput;
  inputList.appendChild(newLI);

  // Turn user input into a number
  value = parseInt(userInput.value);

  // Push and Store input values in an array
  inputValues.push(value);
  // Sum up all numbers in the array
  const sumOfInputs = inputValues.reduce(
    (prevVal, currVal) => prevVal + currVal
  );
  // Set width of progress bar to user inputs
  progressBar.style.width = sumOfInputs + '%';
  // Set padding left on percent number above progress bar
  progressBarPercentage.style.paddingLeft = sumOfInputs - 4 + '%';
  progressBarPercentage.innerHTML = sumOfInputs + '%';
  progressBar.style.opacity = 1;
  // Sum array values up
  // Reset input value
  userInput.value = '';
}

// progress bar is gonna be an array, each time user adds a number it is pushed to end of array and then summed up -- if they delete one it is sliced or whatever them summed up again
// if no value entered make error message pop up Enter Value

// create empty array
// push user input input into that array and total it to equal the width of
// the progress bar
