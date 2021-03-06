// This functions checks validity of input
const checkInputValidity = (input) => {
  let valid = true;
  const parsedInput = input.split(',');

  const values = parsedInput.reduce((result, digit) => {
    if (Number.isNaN(Number(digit))) {
      valid = false;
    } else if (digit !== ' ' && digit !== '') {
      result.push(Number(digit));
    }
    return result;
  }, []);

  if (values.length && valid) return values;
  return null;
};

module.exports = {
  checkInputValidity,
};
