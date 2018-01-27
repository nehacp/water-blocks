const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3333;
const { waterBlocks } = require('./water-blocks');

app.use(express.static('client'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/maxwater', (req, res) => {
  const result = waterBlocks(req.body.value);
  res.status(201).json({ input: req.body.value, result });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

