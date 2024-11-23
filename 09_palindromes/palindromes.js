const palindromes = function (letters) {
  const letterReg = /[^A-Za-z0-9]/g;
  const removeChar = letters.replace(letterReg, '').toLowerCase(); 
  const characters = removeChar.split('');
  console.log(removeChar);
  let testing;
  let i = 0, j = characters.length -1;
  while(i<=j){
      if (characters[i] === characters[j]) {
        i++;
        j--;
      } else {
        return false
      }
    }
    return true;
  }

// Do not edit below this line
module.exports = palindromes;
