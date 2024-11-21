const convertToCelsius = function (tempF) {
  const tempC = (tempF - 32) * (5 / 9);
  if (!Number.isInteger(tempC)) {
    result = parseFloat(tempC.toFixed(1));
  } else {
    result = tempC;
  }
  return result;
};

const convertToFahrenheit = function (tempC) {
  const tempF = ((9 / 5) * tempC) + 32;
  if (!Number.isInteger(tempF)) {
    result = parseFloat(tempF.toFixed(1));
  } else {
    result = tempF;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
