const repeatString = function(string, multiplier) {
  let result = "";
  for (let i = 0; i < multiplier; i++){
    result += string;
  };
  return result;
};

// Do not edit below this line
module.exports = repeatString;
