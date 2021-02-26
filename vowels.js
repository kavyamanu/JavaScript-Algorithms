let str = "Hi, there!"

function findingVowels(str){
  let vowelCount=0;
  let vowels = "aeiou"
  str.toLowerCase();
  for (let char of str){
    if(vowels.includes(char)){
      vowelCount++;
    }
  }
  //  let matches = str.match(/[aeiou]/gi)
  //   return matches
  return vowelCount;
}

console.log(findingVowels(str));
