const {calculateWater, waterFalls } = require('./water-falls');

test('Returns value as expected', () => {
  expect(calculateWater(8, 10, 0, 9).toBe(54));
});