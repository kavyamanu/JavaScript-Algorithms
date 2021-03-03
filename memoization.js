
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result;
    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

function nomFib(n) {
  if (n < 2) {
    return n;
  }
  return nomFib(n - 2) + nomFib(n - 1);
}
const fib = memoize(slowFib);
console.time("slowfib")
console.log(nomFib(16))
console.timeEnd("slowfib")

console.time("fastfib")
console.log(fib(16))
console.timeEnd("fastfib")
