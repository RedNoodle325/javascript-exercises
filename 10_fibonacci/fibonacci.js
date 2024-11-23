const fibonacci = function(n) {
  n = parseInt(n);
  let result = 1, previous = 1; ans = 0;

  if (n<0){return "OOPS";};
  if (n===1 || n===2){return 1;};
  for (let i = 1; i < n-1; i++){
    ans = result + previous;
    previous = result;
    result = ans;
  }
  return ans;
}

// Do not edit below this line
module.exports = fibonacci;
