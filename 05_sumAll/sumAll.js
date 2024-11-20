const sumAll = function (max, min) {
  if (max < 0 || min < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(max) || !Number.isInteger(min)) {
    return "ERROR";
  }
  if (min > max) {
    const temp = max;
    max = min;
    min = temp;
  }
  n = max - min + 1;
  return (n / 2) * (max + min);
};

// Do not edit below this line
module.exports = sumAll;
