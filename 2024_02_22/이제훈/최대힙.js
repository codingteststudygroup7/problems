class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return 0;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.heap[parentIndex] && this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown() {
    let index = 0;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    while (this.heap[leftIndex]) {
      let largerChildIndex = leftIndex;
      if (this.heap[rightIndex] && this.heap[rightIndex] > this.heap[leftIndex]) {
        largerChildIndex = rightIndex;
      }
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        [this.heap[largerChildIndex], this.heap[index]] = [this.heap[index], this.heap[largerChildIndex]];
      }
      index = largerChildIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const heap = new MaxHeap();
const answer = [];
for (let x of arr) {
  if (x > 0) {
    heap.add(x);
  } else {
    const item = heap.poll();
    answer.push(item);
  }
}
console.log(answer.join("\n"));
