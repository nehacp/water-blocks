const { calculateWater, waterFalls } = require('./water-falls');

test('Returns value as expected', () => {
  expect(calculateWater(8, 10, 0, 9)).toEqual(54);
});

test('Should return an array', () => {
  let result = waterFalls([]);
  expect(result[0]).toEqual(0);
  expect(result[1]).toEqual(0);
  expect(result[2]).toEqual(0);
});

test('Should return right value for multiple water pockets', () => {
  let result = waterFalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
  expect(result[0]).toEqual(3);
  expect(result[1]).toEqual(8);
  expect(result[2]).toEqual(11);
});

test('Should return right value for increasing blocks', () => {
  let result = waterFalls([2, 3, 4, 5, 6]);
  expect(result[0]).toEqual(0);
  expect(result[1]).toEqual(0);
  expect(result[2]).toEqual(0);
});

test('Should return right value for decreasing blocks', () => {
  let result = waterFalls([6, 5, 4, 3, 2]);
  expect(result[0]).toEqual(0);
  expect(result[1]).toEqual(0);
  expect(result[2]).toEqual(0);
});

test('Should return right value if all blocks between first and last are small', () => {
  let result = waterFalls([8, 3, 7, 2, 6, 4, 5, 9]);
  expect(result[0]).toEqual(1);
  expect(result[1]).toEqual(8);
  expect(result[2]).toEqual(21);
});

test('Should return right value for increasing blocks followed by decreasing blocks', () => {
  let result = waterFalls([2, 3, 4, 3, 1]);
  expect(result[0]).toEqual(0);
  expect(result[1]).toEqual(0);
  expect(result[2]).toEqual(0);
});

test('Should return right value for random multiple tests', () => {
  let result1 = waterFalls([5, 3, 7, 2, 6, 4]);
  let result2 = waterFalls([2, 3, 5, 3, 4, 6]);
  let result3 = waterFalls([8, 3, 7, 2, 6, 4, 5, 9, 6, 3, 4, 5]);
  expect(result1[0]).toEqual(3);
  expect(result1[1]).toEqual(5);
  expect(result1[2]).toEqual(4);
  
  expect(result2[0]).toEqual(3);
  expect(result2[1]).toEqual(6);
  expect(result2[2]).toEqual(3);
  
  expect(result3[0]).toEqual(1);
  expect(result3[1]).toEqual(8);
  expect(result3[2]).toEqual(21);
});
