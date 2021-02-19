function isPalindromeBruteForce(str) {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr
  }

  return newStr === str;
}

function isPalindromeEfficient(str) {
  const charArray = [...str];

  return charArray.every((char, index) => {
    return char === charArray[charArray.length - index];
  })
}

