let str = "Hello World"

function maxCharacter(str) {
  let chars = {};
  let maxValue = 0;
  let maxKey = '';
  for (let char of str) {
    chars[char] = chars[char] ? chars[char] + 1 : 1
  }
  for (let char in chars) {
    if (chars[char] > maxValue) {
      maxValue = chars[char]
      maxKey = char;
    }
  }
  console.log(chars);
  return `Max Character-> ${maxKey}:${maxValue}`;
}

console.log(maxCharacter(str));
// output:
// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
// Max Character-> l:3
