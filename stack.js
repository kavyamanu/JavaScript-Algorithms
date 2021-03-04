class Stack {
  constructor() {
    this.data = [];
  }
  push(n) {
    return this.data.push(n);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
//first in last out.
const stk = new Stack();
class Queue {
  constructor() {
    this.first = new Stack();
    this.next = new Stack();
  }
  add(record) {
    return this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      this.next.push(this.first.pop());
    }
    const record = this.next.pop()
    while (this.next.peek()) {
      this.first.push(this.next.pop())
    }
    return record;
  }
  peek() {
    while (this.first.peek()) {
      this.next.push(this.first.pop());
    }
    const record = this.next.peek()
    while (this.next.peek()) {
      this.first.push(this.next.pop())
    }
    return record;  }
}

let q = new Queue();
console.log(q.add(1));
console.log(q.add(2));
console.log(q.peek());
console.log(q.remove());
