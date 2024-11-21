const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(input) {
  let result = 0;
  if (input.length === 0){
    return result;
  } else {
    for (i=0; i<input.length; i++){
        result += input[i];
    }
    return result;
  }
};

const multiply = function(input) {
  let result = 0;
  if (input.length === 0){
    return result;
  } else {
    result = 1;
    for (i=0; i<input.length; i++){
        result *= input[i];
    }
    return result;
  }
};

const power = function(num1, pow) {
  let result = 1;
  while(pow>0){
    result *=num1;
    pow--;
  }
  return result;
};

const factorial = function(num) {
	if (num <= 1 ){
    return 1;
  } else {
    return num*factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
