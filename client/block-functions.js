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
