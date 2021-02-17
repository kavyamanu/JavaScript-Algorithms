//1,1,1,0,1,1,1,1,1
// Finding maximum consecutive ones within an array without using built in array functions
//1,0,1,1,0,1,1,1,0,1
//First one the output should be 5
//Second one the output should be 3

const arr = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1];
const getMaxConsecutiveCount = (arr) => {
  let maxCount = 0;
  let currentCount = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 1) {
      currentCount++
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
    if (arr[index] === 0) {
      currentCount = 0
    }
  }
  return maxCount;
}
console.log(getMaxConsecutiveCount(arr));
// output : 3
