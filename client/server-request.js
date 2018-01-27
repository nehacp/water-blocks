const { renderWaterBlocks } = require('./render-water-blocks');

// request server for answer to water blocks problem
const requestWaterBlocksFromServer = (request) => {
  fetch(request)
    .then((response) => {
      if (response.status === 201) return response.json();
      throw new Error('Unexpected Response');
    })
    .then(result => renderWaterBlocks(result))
    .catch(error => console.error('Error with request', error));
};

// Create a request object for sending request
const createRequest = (numbers) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const request = new Request('http://127.0.0.1:3333/maxwater', {
    method: 'POST',
    body: JSON.stringify({ value: numbers }),
    headers,
  });
  return request;
};

const processInput = (input) => {
  requestWaterBlocksFromServer(createRequest(input));
};

module.exports = {
  processInput,
};
