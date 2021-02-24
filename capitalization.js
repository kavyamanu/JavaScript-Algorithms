function capitalization(string){
  let newString = [];
  let space = 0
  for(let char of string){
    if(newString.length===0 || space){
      char = char.toLocaleUpperCase();
      space=0;
    } else if(char === " "){
      space++;
    }
    newString.push(char);
  }
  return newString.join("");
}
console.log(capitalization("this is cool"));
//Output : This Is Cool
