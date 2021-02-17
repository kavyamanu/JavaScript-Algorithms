function isPalindrome(str) {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr
  }

  return (newStr === str)
  ? true
  : false;
}
console.log(isPalindrome("kavak"));
