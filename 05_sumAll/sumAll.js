const sumAll = function (max, min) {

  if (
    max < 0 ||
    min < 0 ||
    !Number.isInteger(max) ||
    !Number.isInteger(min)
  ) {
    return "ERROR";
  }

  if (min > max) {
    const temp = min;
    max = min;
    min = temp;
  }

  return ((max-min+1)/ 2) * (max + min);

};

// Do not edit below this line
module.exports = sumAll;
