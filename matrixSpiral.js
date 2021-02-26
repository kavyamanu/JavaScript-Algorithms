function matrix(n) {
  let spiral = [];

  for (let i = 0; i < n; i++) {
    spiral.push([]);
  }
  let counter = 1;
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      spiral[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      spiral[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      spiral[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      spiral[i][startColumn] = counter;
      counter++;
    }
    startColumn++;

  }

  return spiral;
}

console.log(matrix(4))
