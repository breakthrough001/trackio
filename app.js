// Selectors
const progressBar = document.querySelector('.progress-done');
const progressBarPercentage = document.querySelector('.progressBarPercentage');
const barProgress = document.querySelector('.bar-progress');
const progressBarGoal = document.querySelector('.progress-bar-goal');

const userInput = document.querySelector('.user-input');
const userWish = document.querySelector('#user-wish');
const inputList = document.querySelector('.input-list');
const submitButton = document.querySelector('.input-button');
const goalButton = document.querySelector('.goal-button');
const goalFormInput = document.querySelector('.goal-form');
let inputValues = [];

// Select Data Attribute
let value = parseInt(progressBarPercentage.innerHTML.slice(0, -1));
// Progress Bar Default State
progressBar.style.opacity = 0;

// Event Listeners
submitButton.addEventListener('click', addUserInput);
goalButton.addEventListener('click', captureUserGoal);

// Functions
// Add User Input to List
function addUserInput(event) {
  event.preventDefault();
  const newLI = document.createElement('li');
  const newUserInput = `$${userInput.value}`;
  // Capture User Goal Input
  const newUserGoal = global;
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
}

function progressBarStyles(sumOfInputs, newUserGoal) {
  const roundedNumber = Math.round((sumOfInputs / newUserGoal) * 100);
  if (sumOfInputs >= global) {
    // Show Progress Bar
    progressBar.style.opacity = 1;
    // set bar to 100%
    progressBar.style.width = 100 + '%';
    // Hide Progress Currency
    progressBarPercentage.innerHTML = '';
    // Inner Bar Percent
    barProgress.innerHTML = 100 + '%';
  } else {
    // Show Progress Bar
    progressBar.style.opacity = 1;
    // Set width of progress bar to user inputs
    progressBar.style.width = roundedNumber + '%';
    // Set padding left on percent number above progress bar
    progressBarPercentage.style.paddingLeft = roundedNumber - 4 + '%';
    // Set User Goal
    progressBarPercentage.innerHTML = '$' + sumOfInputs;
    // Inner Bar Percent
    barProgress.innerHTML = roundedNumber + '%';
  }
}

let global;

function captureUserGoal(e) {
  e.preventDefault();
  global = parseInt(userWish.value);
  // Number at end of progress bar
  progressBarGoal.innerHTML = '$' + global;
  global.value = '';
}

// if no value entered make error message pop up Enter Value
// need to capture user goal outside submit function and store it as a number
// function needs to return a variable so it can be used outside of the function
