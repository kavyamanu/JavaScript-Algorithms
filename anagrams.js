function isAnagrams(firstString, secondString) {
  let fs = convert(firstString)
  let ls = convert(secondString)
  if (Object.keys(fs).length != Object.keys(ls).length) {
    return false;
  }
  for (let key in fs) {
    if (fs[key] !== ls[key]) {
      return false;
    }
  }
  return true;
}
function inOrder(string) {
  return (string.replace(/[^\w]/g, "")
    .toLowerCase()
    .split('')
    .sort((a, b) => a > b ? 1 : -1)
    .join(''))
}
function convert(string) {
  let newString = {};
  for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
    newString[char] = newString[char] + 1 || 1
  }
  return newString;
}
console.log(isAnagrams("Hello !!!", "ollha"));

//output : false
