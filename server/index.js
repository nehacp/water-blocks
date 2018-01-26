const express = require ('express');
const app = app();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const waterBlocks = require('./water-blocks');

app.use(bodyParser.json());

app.post('/maxwater', (req, res) => {
  /// this is the request handler for returning the answer;
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});