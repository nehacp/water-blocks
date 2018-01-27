This repo contains the logic for a variation of the water blocks problem. It is written in JavaScript

## Dependencies
- "body-parser": "^1.18.2",
- "express": "^4.16.2"

## Dev Dependencies
- "browserify": "^15.2.0",
- "eslint": "^4.16.0",
- "eslint-config-airbnb-base": "^12.1.0",
- "eslint-plugin-import": "^2.8.0",
- "jest": "^22.1.4",
- "nodemon": "^1.14.11"

## Commands

To install dependencies, use the command below in the terminal

```
npm install
```

To run tests, use the command below in the terminal

```
npm test
```

To run the server, use this command in the terminal

```
npm start
```


## Water Blocks Logic

```
Given an array that represents heights of walls, find the maximum number of water blocks that
can be trapped between two walls

Input --> [5, 3, 7, 2, 6, 4, 5, 9, 1, 2] // an array with heights of walls
Output --> [3, 8, 11] // tuple with index of wall#1, index wall#2 and blocks of water
Constraints --> None
Edge Cases --> No blocks (empty array), invalid input

Strategy: Iterate over array and check if next wall is smaller than current and the one after that
is larger than the previous one.
If yes,
  another loop till you find a wall smaller than or equal to the max wall between 2 current
  Accumulate water as you go comparing it to previous max water.
If no, condition breaks and reset blocks and water collection. Go to next wall;

Transformation:
  [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
    [5, 3, 7] --> 7 < 3 && 7 > 5, count water blocks with smaller height - middle --> 2
      [5, 3, 7, 2] --> breaks condition of 5 or 2 being higher than 7;
    [3, 7, 2] --> breaks coz 7 is higher
    [7, 2, 6] --> 2 < 7  so collect middle walls --> 4
      [7, 2, 6, 4] --> 6 < 7 middle walls is --> 2 + 6 = 8 // calculate water and compare
      [7, 2, 6, 4, 5] --> 4 < 7, middle walls is 8 + 4 = 12 // calculate water and compare
      [7, 2, 6, 4, 5, 9] --> 5 < 9   walls is 12 + 5 --> 17 // calculate water and compare
      [7, 2, 6, 4, 5, 9, 1] --> 9 > 7  breaks condition
    [2, 6, 4] --> So on

Big O: O(n^2)// worst case it will run a nested loop over the whole array.
```
