(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// ***************** Individual Block Functions ******************** //

// Colours wall block black or gray
const colorWallBlock = (wall, left, right, block) => {
  if (left === wall || right === wall) {
    block.classList.add('black-block');
  } else {
    block.classList.add('gray-block');
  }
};

// Colour water block blue
const colorWaterBlock = (block) => {
  block.classList.add('blue-block');
};

// Check if it is a water block
const isItWaterBlock = (wall, left, right, height, water) => (
  wall > left
  && wall < right
  && height <= 0
  && water > 0
);

// Check if it is a wall block
const isItWallBlock = wall => wall > 0;

// Adds number to block
const addNumberToBlock = (block, height) => {
  block.innerHTML = height + 1;
};

module.exports = {
  colorWallBlock,
  colorWaterBlock,
  isItWaterBlock,
  isItWallBlock,
  addNumberToBlock,
};

},{}],2:[function(require,module,exports){
const { processInput } = require('./server-request');
const { checkInputValidity } = require('./input-validity.js');

// clear grid incase previous grid exits
const clearGrid = () => {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
};

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

},{"./input-validity.js":3,"./server-request":5}],3:[function(require,module,exports){
// This functions checks validity of input
const checkInputValidity = (input) => {
  let valid = true;
  const parsedInput = input.split(',');

  const values = parsedInput.reduce((result, digit) => {
    if (Number.isNaN(Number(digit))) {
      valid = false;
    } else if (digit !== ' ' && digit !== '') {
      result.push(Number(digit));
    }
    return result;
  }, []);

  if (values.length && valid) return values;
  return null;
};

module.exports = {
  checkInputValidity,
};

},{}],4:[function(require,module,exports){
const {
  isItWaterBlock,
  colorWallBlock,
  colorWaterBlock,
  addNumberToBlock,
  isItWallBlock,
} = require('./block-functions');


// ************** Main Render Functions ************ //

// this function adds all the blocks to the table
const renderBlocks = ({ width, height }, input, result) => {
  const table = document.querySelector('table');
  const walls = input.slice();
  let water = result[2];

  // loop for height
  for (let i = 0; i < height; i += 1) {
    const row = document.createElement('tr');
    let firstBlock = true;

    // loop for width
    for (let j = 0; j < width; j += 1) {
      const block = document.createElement('td');
      block.classList.add('block');
      if (firstBlock) {
        addNumberToBlock(block, i);
        firstBlock = false;
      } else if (isItWallBlock(walls[j - 1])) {
        colorWallBlock(j, result[0], result[1], block);
        walls[j - 1] -= 1;
      } else if (isItWaterBlock(j, result[0], result[1], walls[j - 1], water)) {
        colorWaterBlock(block);
        water -= 1;
      }

      row.appendChild(block);
    }

    table.prepend(row);
  }
};

// this function creates a table
const renderTable = ({ width, height }) => {
  const grid = document.querySelector('#grid');
  const table = document.createElement('table');
  table.setAttribute('style', `width: ${(width * 37)}px; height: ${(height * 37)}px`);
  grid.appendChild(table);
};

// this function renders a saying no water found
const renderWaterBlocksInfo = (info) => {
  const div = document.createElement('div');
  div.innerHTML = info;
  div.setAttribute('style', 'margin-top: 5px; font-size: 30px');
  const grid = document.querySelector('#grid');
  grid.appendChild(div);
};

// this function handles the response received from the server
const renderGrid = ({ input, result }) => {
  const width = input.length + 1;
  const height = Math.max(...input) + 1;
  const water = result[2];

  if (!water) {
    renderWaterBlocksInfo('No trapped water');
  } else {
    renderWaterBlocksInfo(`Maximum trapped water blocks - ${water}`);
  }

  renderTable({ width, height });
  renderBlocks({ width, height }, input, result);
};

module.exports = {
  renderGrid,
  renderBlocks,
  renderTable,
  renderWaterBlocksInfo,
};


},{"./block-functions":1}],5:[function(require,module,exports){
const { renderGrid } = require('./render-grid');

// request server for answer to water blocks problem
const requestWaterBlocksFromServer = (request) => {
  fetch(request)
    .then((response) => {
      if (response.status === 201) return response.json();
      throw new Error('Unexpected Response');
    })
    .then(result => renderGrid(result))
    .catch(error => console.error('Error with request', error));
};

// Create a request object for sending request
const createRequest = (numbers) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const request = new Request('http://127.0.0.1:3333/maxwater', {
    method: 'POST',
    body: JSON.stringify({ value: numbers }),
    headers,
  });
  return request;
};

const processInput = (input) => {
  requestWaterBlocksFromServer(createRequest(input));
};

module.exports = {
  processInput,
  createRequest,
  requestWaterBlocksFromServer,
};

},{"./render-grid":4}]},{},[2]);
