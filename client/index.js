const { processInput } = require('./server-request');
const { checkInputValidity, clearGrid } = require('./helpers.js');

// This function handles the submit button for input
const handleSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementsByName('numbers')[0];
  const { value } = input;
  input.value = '';
  clearGrid();
  const validInput = checkInputValidity(value);
  if (validInput) processInput(validInput);
  if (!validInput) alert('Enter a valid input');
};

// Attach event listener to button
const onLoad = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', handleSubmit);
};

window.onload = onLoad;
