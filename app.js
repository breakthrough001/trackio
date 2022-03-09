// Selectors
const progressBar = document.querySelector('.progress-done');
const progressBarPercentage = document.querySelector('.progressBarPercentage');
const barProgress = document.querySelector('.bar-progress');
const progressBarGoal = document.querySelector('.progress-bar-goal');

const userInput = document.querySelector('.user-input');
const userGoal = document.querySelector('.user-goal');
const inputList = document.querySelector('.input-list');
const submitButton = document.querySelector('button');
let inputValues = [];

// Select Data Attribute
let value = parseInt(progressBarPercentage.innerHTML.slice(0, -1));
// Progress Bar Default State
progressBar.style.opacity = 0;

// Event Listeners
submitButton.addEventListener('click', addUserInput);

// Functions
// Add User Input to List
function addUserInput(event) {
  event.preventDefault();
  const newLI = document.createElement('li');
  const newUserInput = `$${userInput.value}`;
  // Capture User Goal Input
  const newUserGoal = parseInt(userGoal.value);
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
  progressBarStyles(sumOfInputs, newUserGoal);
  clearUserInputs();
}

function clearUserInputs() {
  userInput.value = '';
  userGoal.value = '';
}

function progressBarStyles(sumOfInputs, newUserGoal) {
  // Set width of progress bar to user inputs
  progressBar.style.width = sumOfInputs + '%';
  // Set padding left on percent number above progress bar
  progressBarPercentage.style.paddingLeft = sumOfInputs - 4 + '%';
  // Set User Goal
  progressBarPercentage.innerHTML = '$' + sumOfInputs;
  progressBarGoal.innerHTML = '$' + newUserGoal;
  // Show Progress Bar
  progressBar.style.opacity = 1;
  // Inner Bar Percent
  barProgress.innerHTML = (sumOfInputs / newUserGoal) * 100 + '%';
  console.log(sumOfInputs);
  console.log(newUserGoal);
}

// if no value entered make error message pop up Enter Value

// need to capture user goal outside submit function and store it as a number
