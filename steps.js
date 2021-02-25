function steps(n) {
  let step;
  for (let i = 1; i <= n; i++) {
    step = "#".repeat(i)
    if(i!=n){
      step = step + " ".repeat(n-i);
    }
    console.log(step);
  }
  return;
}
console.log(steps(3))
// output:
// '#  '
// '## '
// '###'
