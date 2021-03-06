// Selectors
const progressBar = document.querySelector(".progress-done");
const progressBarPercentage = document.querySelector(".progressBarPercentage");
const barProgress = document.querySelector(".bar-progress");
const progressBarGoal = document.querySelector(".progress-bar-goal");

const userInput = document.querySelector(".user-input");
const userTarget = document.querySelector("#user-target");
const userWish = document.querySelector("#user-wish");
const userGoalH2 = document.querySelector(".user-goal-text");
const inputList = document.querySelector(".input-list");
const userGoalContainer = document.querySelector(".user-goal-container");
const submitButton = document.querySelector(".input-button");
const goalButton = document.querySelector(".goal-button");
let inputValues = [];

// Select Data Attribute
let value = parseInt(progressBarPercentage.innerHTML.slice(0, -1));
// Progress Bar Default State
progressBar.style.opacity = 0;

// Event Listeners
submitButton.addEventListener("click", addUserInput);
goalButton.addEventListener("click", captureUserGoal);

// Functions
// Add User Input to List
function addUserInput(event) {
   event.preventDefault();
   const newLI = document.createElement("li");
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
   userInput.value = "";
}

function progressBarStyles(sumOfInputs, newUserGoal) {
   const roundedNumber = Math.round((sumOfInputs / newUserGoal) * 100);
   if (sumOfInputs >= global) {
      // Show Progress Bar
      progressBar.style.opacity = 1;
      // set bar to 100%
      progressBar.style.width = 100 + "%";
      // Remove border right
      progressBar.style.borderRight = "none";
      // Hide Progress Currency
      progressBarPercentage.innerHTML = "";
      // Inner Bar Percent
      barProgress.innerHTML = 100 + "%";
   } else {
      // Show Progress Bar
      progressBar.style.opacity = 1;
      // Set width of progress bar to user inputs
      progressBar.style.width = roundedNumber + "%";
      // Set padding left on percent number above progress bar
      progressBarPercentage.style.paddingLeft = roundedNumber - 4 + "%";
      // Set User Goal
      progressBarPercentage.innerHTML = "$" + sumOfInputs;
      // Inner Bar Percent
      barProgress.innerHTML = roundedNumber + "%";
   }
}

// global variable to be used in and out of function
let global;

function captureUserGoal(e) {
   e.preventDefault();
   // update h2
   const userGoalInput = userWish.value;
   userGoalH2.innerText = userGoalInput;
   // remove bottom border
   userGoalContainer.style.border = "none";
   // capture user target
   global = parseInt(userTarget.value);
   // Number at end of progress bar
   progressBarGoal.innerHTML = "$" + global;
   console.log(userGoalInput);
   userWish.value = "";
   userTarget.value = "";
   userInput.focus();
}

// if no value entered make error message pop up Enter Value
