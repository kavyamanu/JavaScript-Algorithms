function steps(n) {
  let step;
  for (let i = 1; i <= n; i++) {
    step = "#".repeat((2 * i) - 1)
    if (i != n) {
      step = " ".repeat(n - i) + step + " ".repeat(n - i);
    }
    console.log(step);
  }
  return;
}
console.log(steps(3))
  // output:
  //  '  #  '
  //  ' ### '
  //  '#####'
