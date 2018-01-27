const calculateWater = (wall, blocks, left, right) => {
  const grid = wall * ((right - left) + 1);
  return grid - ((wall * 2) + blocks);
};

// Get the walls that hold the maximum water trapped including the number of water blocks

const waterBlocks = (walls) => {
  // left and right need to be higher than the middle one
  // left needs to exist and right needs to exist
  if (!Array.isArray(walls)) {
    throw new Error('Invalid Input');
  }

  let blocks = 0;
  let maxWaterBlocks = 0;
  let result = [0, 0, 0];
  let right;
  let water;
  let smallerWall;
  let middle;

  for (let left = 0; left < walls.length - 2; left += 1) {
    right = left + 2; // counter for right wall
    middle = right - 1; // counter for middle wall

    // loop as long as one of the walls is higher than current middle
    while (Math.max(walls[left], walls[right]) > walls[middle] && right < walls.length) {
      blocks += walls[middle]; // accumulate blocks
      smallerWall = Math.min(walls[left], walls[right]); // find smaller wall
      water = calculateWater(smallerWall, blocks, left, right); // calculate water

      // compare water with previous water value
      if (water > maxWaterBlocks) {
        maxWaterBlocks = water;
        result = [left + 1, right + 1, water];
      }

      // reset current walls
      right += 1;
      middle = right - 1;
    }

    // reset blocks for next set of walls after while loop
    blocks = 0;
  }

  return result;
};

module.exports = {
  waterBlocks,
  calculateWater,
};
