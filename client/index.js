const { requestWaterBlocksFromServer, createRequest } = require('./server-request');

// This function handles the submit button for input
const handleSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementsByName('numbers')[0];
  const { value } = input;
  input.value = '';
  console.log('value', value);

  requestWaterBlocksFromServer(createRequest(value));
};

// Attach event listener to button
const button = document.querySelector('button');
button.addEventListener('click', handleSubmit);
