const { requestWaterBlocksFromServer, createRequest } = require('./server-request');

// This function handles the submit button for input
const handleSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementsByName('numbers')[0];
  const { value } = input;
  input.value = '';

  let valid = true;
  const parsedInput = value.split(',');

  const grid = document.querySelector('#grid');
  grid.innerHTML = '';

  const values = parsedInput.reduce((result, digit) => {
    if (Number.isNaN(Number(digit))) {
      valid = false;
    } else if (digit !== ' ' && digit !== '') {
      result.push(Number(digit));
    }
    return result;
  }, []);

  if (values.length) {
    if (valid) {
      requestWaterBlocksFromServer(createRequest(values));
    } else {
      alert('Enter a valid input');
    }
  }
};

// Attach event listener to button
const button = document.querySelector('button');
button.addEventListener('click', handleSubmit);
