const {
  isItWaterBlock,
  colorWallBlock,
  colorWaterBlock,
  addNumberToBlock,
  isItWallBlock,
} = require('../client/block-functions');

const { waterBlocks } = require('../server/water-blocks');

const input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
const result = waterBlocks(input);

test('isItWallBlock should return true for value greater than 0', () => {
  expect(isItWallBlock(5)).toEqual(true);
});

test('colorWallBlock should color the block gray if not highest wall', () => {
  const block = document.createElement('td');
  colorWallBlock(3, 4, 6, block);
  expect(block.classList[0]).toEqual('gray-block');
});

test('colorWallBlock should color wall black if highest wall', () => {
  const block = document.createElement('td');
  colorWallBlock(5, 5, 7, block);
  expect(block.classList[0]).toEqual('black-block');
});

test('addNumbertoBlock should add height value to element', () => {
  const block = document.createElement('td');
  addNumberToBlock(block, 6);
  expect(block.innerHTML).toEqual('7');
});

test('isItWaterBlock should return true for a water block', () => {
  expect(isItWaterBlock(5, 4, 7, 0, 5)).toBe(true);
});

test('should color block to blue if water block', () => {
  const block = document.createElement('td');
  colorWaterBlock(block);
  expect(block.classList[0]).toEqual('blue-block');
});
