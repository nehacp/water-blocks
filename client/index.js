const handleSubmit = function(event) {
  event.preventDefault();
  const input = document.getElementsByName('numbers')[0];
  const value = input.value;
  input.value = '';
  console.log('value', value);
}



const button = document.querySelector('button');
button.addEventListener('click', handleSubmit);