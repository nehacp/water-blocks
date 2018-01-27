const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3333;
const { waterBlocks } = require('./water-blocks');
const { parseInput } = require('./helpers');

app.use(express.static('client'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/maxwater', (req, res) => {
  const input = parseInput(req.body.value);
  const result = waterBlocks(input);
  res.status(201).json({ input, result });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

