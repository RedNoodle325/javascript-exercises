const reverseString = function(s1) {
  s1 = s1.split('');
  let s2 = [];
  for (let i = s1.length -1; i>=0; i--){
    s2.push(s1[i]);
  }
  return s2.join(''); // multiple line answer
  // return s1.split('').reverse().join('');  // single line answer
};


// Do not edit below this line
module.exports = reverseString;
