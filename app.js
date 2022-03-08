// Selectors
const progressBar = document.querySelector(".progress-done");
const progressBarPercentage = document.querySelector(".progressBarPercentage");

const userInput = document.querySelector(".user-input");
const inputList = document.querySelector(".input-list");
const submitButton = document.querySelector("button");

// Select Data Attribute
const dataContainer = document.querySelector("#data-container");
// Get value in data-value
let dataValueHolder = parseInt(dataContainer.getAttribute("data-value"));
console.log(dataValueHolder);

const user = document.querySelector("[data-value]");

// Event Listeners
submitButton.addEventListener("click", addUserInput);

// Functions

// Add User Input to List
function addUserInput(event) {
   event.preventDefault();
   const newLI = document.createElement("li");
   const newUserInput = `$${userInput.value}`;
   newLI.innerText = newUserInput;
   inputList.appendChild(newLI);

   // Change data-value
}

// Progress Bar Styling
progressBar.style.opacity = 1;
// This line is getting the value of data-value as a number then adding a % to it to set the width of the bar to that width
progressBar.style.width = progressBar.getAttribute("data-value") + "%";
// Set padding left on percent number above progress bar
progressBarPercentage.style.paddingLeft =
   progressBar.getAttribute("data-value") - 4 + "%";

// console.log(progressBar.getAttribute('data-value'));
// console.log(progressBarPercentage.innerHTML.slice(0, -1));
//
//
//
//
//
//
// submitButton.addEventListener('click', () => {
//   // num has to equal the input value number user enters
//   let num = userInput.value;
//   // let num = progressData.setAttribute('data-value', num);
//   console.log('data-value', num);
//   progressData
//     .setAttribute(num) // progressData.style.width = progress.getAttribute('data-value') + '%';
//     .document.querySelector('.percentage').innerHTML = `${num}%`;
// });

// progress bar is gonna be an array, each time user adds a number it is pushed to end of array and then summed up -- if they delete one it is sliced or whatever them summed up again
// if no value entered make error message pop up Enter Value
