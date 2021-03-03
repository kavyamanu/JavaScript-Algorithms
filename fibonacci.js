
function fib(n) {
  let fibList = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibList.push(fibList[i - 1] + fibList[i - 2])
  }
  console.log(fibList);
  return fibList[n];
}
console.log(fib(4));
