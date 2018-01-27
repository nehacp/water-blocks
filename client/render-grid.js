const {
  isItWaterBlock,
  colorWallBlock,
  colorWaterBlock,
  isEmptyBlock,
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
      } else {
        isEmptyBlock(block);
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
};

