
const processResult = (result) => {
  console.log('Got result', result);
}

const requestWaterBlocksFromServer = (request) => {
  fetch(request)
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Unexpected Response');
      }
    })
    .then(result => processResult(result))
    .catch(error => console.error('Error with request', error));
}

const createRequest = (numbers) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const request = new Request('http://127.0.0.1:3333/maxwater', {
    method: 'POST',
    body: JSON.stringify({value: numbers}),
    headers: headers
  });
  return request;
}


const handleSubmit = function(event) {
  event.preventDefault();
  const input = document.getElementsByName('numbers')[0];
  const value = input.value;
  input.value = '';
  console.log('value', value);

  requestWaterBlocksFromServer(createRequest(value));

}



const button = document.querySelector('button');
button.addEventListener('click', handleSubmit);