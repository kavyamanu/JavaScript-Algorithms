class Queue {
  constructor() {
    this.data = [];
  }
  add(n) {
    return this.data.unshift(n);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1]
  }
}
const sourceOne = new Queue;
sourceOne.add(1);
sourceOne.add(2);
sourceOne.add(3);

const sourceTwo = new Queue;
sourceTwo.add("one");
sourceTwo.add("Two");
sourceTwo.add("Three");

function weave(sourceOne, sourceTwo) {
  const q = new Queue;
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove())
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove())
    }
  }
  return q;
}

console.log(weave(sourceOne, sourceTwo))
