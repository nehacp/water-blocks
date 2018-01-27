// this function adds all the blocks to the table
const renderBlocks = ({ width, height }, input, result) => {
  const table = document.querySelector('table');
  const walls = input.slice();
  let water = result[2];

  const borderColor = '#bfbfbf';

  for (let i = 0; i < height; i += 1) {
    const row = document.createElement('tr');
    let firstCreated = false;

    for (let j = 0; j < width; j += 1) {
      const block = document.createElement('td');
      block.classList.add('block');

      if (!firstCreated) {
        block.innerHTML = i + 1;
        firstCreated = true;
        block.setAttribute('style', `border: 0.25px solid ${borderColor};`);
      } else if (walls[j - 1] > 0) {
        if (result[0] === j || result[1] === j) {
          block.setAttribute('style', 'background-color: #000000; border: 0.25px solid, #000000;');
        } else {
          block.setAttribute('style', `background-color: rgba(191, 191, 191, 0.7); border: 0.25px solid ${borderColor};`);
        }
        walls[j - 1] -= 1;
      } else if (j > result[0] && j < result[1]
        && walls[j - 1] <= 0
        && water > 0) {
        block.setAttribute('style', `background-color: #00ffff; border: 0.25px solid ${borderColor};`);
        water -= 1;
      } else {
        block.setAttribute('style', `border: 0.25px solid ${borderColor};`);
      }
      row.appendChild(block);
    }

    table.prepend(row);
  }
};

// this function creates a table
const createTable = ({ width, height }) => {
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

// this function calculates the width and height of the grid;
const calculateGridSize = (input) => {
  const width = input.length + 1;
  const height = input.reduce((max, block) => {
    if (block > max) {
      max = block;
    }
    return max;
  }, 0) + 1;
  return { width, height };
};

// this function handles the response received from the server
const renderWaterBlocks = ({ input, result }) => {
  const { width, height } = calculateGridSize(input);

  if (!result[2]) {
    renderWaterBlocksInfo('No trapped water');
  } else {
    renderWaterBlocksInfo(`Maximum trapped water blocks - ${result[2]}`);
  }

  createTable({ width, height });
  renderBlocks({ width, height }, input, result);
};

module.exports = {
  renderWaterBlocks,
};

