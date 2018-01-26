const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const waterBlocks = require('./water-blocks');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/maxwater', (req, res) => {
  /// this is the request handler for returning the answer;
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});