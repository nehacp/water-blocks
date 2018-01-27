// ***************** Individual Block Functions ******************** //

// Colours wall block black or gray
const colorWallBlock = (wall, left, right, block) => {
  if (left === wall || right === wall) {
    block.setAttribute('style', 'background-color: #000000; border: 0.25px solid, #000000;');
  } else {
    block.setAttribute('style', 'background-color: rgba(191, 191, 191, 0.7); border: 0.25px solid #bfbfbf;');
  }
};

// Colour water block blue
const colorWaterBlock = (block) => {
  block.setAttribute('style', 'background-color: #00ffff; border: 0.25px solid #bfbfbf;');
};

// Check if it is a water block
const isItWaterBlock = (wall, left, right, currentWall, water) => (
  wall > left
  && wall < right
  && currentWall <= 0
  && water > 0
);

// Adds border to empty box
const isEmptyBlock = (block) => {
  block.setAttribute('style', 'border: 0.25px solid #bfbfbf;');
};

// Check if it is a wall block
const isItWallBlock = wall => wall > 0;

// Adds number to block
const addNumberToBlock = (block, height) => {
  block.innerHTML = height + 1;
  block.setAttribute('style', 'border: 0.25px solid #bfbfbf;');
};

module.exports = {
  colorWallBlock,
  colorWaterBlock,
  isItWaterBlock,
  isEmptyBlock,
  isItWallBlock,
  addNumberToBlock,
};
