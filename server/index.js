const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3333;
const waterBlocks = require('./water-blocks');

app.use(express.static('client'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/maxwater', (req, res) => {
  // this is the request handler for returning the answer;
  console.log('here with request', req.body);
  res.status(201).json('Came to post');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

