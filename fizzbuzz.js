function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizbuzz");
    } else if (i % 3 === 0) {
      console.log("fiz");
    } else if (i % 5 === 0) {
      console.log("buz");
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(15);
