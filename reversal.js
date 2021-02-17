

function reversal(str) {
  let newStr = '';
  for(let char of str ){
      newStr = char + newStr
  }
return newStr;
}

reversal('kavya');
