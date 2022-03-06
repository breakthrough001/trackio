// Selectors
const progressData = document.querySelector('.progress-done');

const progressBar = document.querySelector('.progress');

const userInput = document.querySelector('.user-input');
const userDate = document.querySelector('.user-date-input');
const inputList = document.querySelector('.input-list');
const submitButton = document.querySelector('button');

// Event Listeners
submitButton.addEventListener('click', addUserInput);

function addUserInput(event) {
  event.preventDefault();
  const newLI = document.createElement('li');
  // capture and store date value
  // capture and store input value
  const newUserInput = `$${userInput.value}`;
  newLI.innerText = newUserInput;
  inputList.appendChild(newLI);
}

// Progress Bar
progressData.style.width = progressData.getAttribute('data-done') + '%';
progressData.style.opacity = 1;

submitButton.addEventListener('click', () => {
  let num = document.getElementById('text-1').value;
  progressData.setAttribute('data-done', num);
  progressData.style.width = progress.getAttribute('data-done') + '%';
  document.querySelector('.percentage').innerHTML = `${num}%`;
});

// progress bar is gonna be an array, each time user adds a number it is pushed to end of array and then summed up -- if they delete one it is sliced or whatever them summed up again
