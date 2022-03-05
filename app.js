const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;
////////

const dataDiv = document.querySelector('.progress-done');
const updateButton = document.querySelector('button');

updateButton.addEventListener('click', () => {
  let num = document.getElementById('text-1').value;
  dataDiv.setAttribute('data-done', num);
  progress.style.width = progress.getAttribute('data-done') + '%';
  document.querySelector('.percentage').innerHTML = `${num}%`;
});

// progress bar is gonna be an array, each time user adds a number it is pushed to end of array and then summed up -- if they delete one it is sliced or whatever them summed up again
