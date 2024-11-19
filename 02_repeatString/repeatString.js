const repeatString = function(string, multiplier) {
  let result = "";
  if (multiplier < 0){ return "ERROR";}
  for (let i = 0; i < multiplier; i++){
    result += string;
  };
  return result;
};

// Do not edit below this line
module.exports = repeatString;
