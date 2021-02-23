let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//Divide array into chunks of given length
function chunks(ary, chunkSize) {

  let chunked = [];

  for (let element of ary) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === chunkSize) {
      chunked.push([element])
    } else {
      last.push(element);
    }
  }
  return chunked;
}

console.log(chunks(ary, 4));
//Output: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9 ] ]
