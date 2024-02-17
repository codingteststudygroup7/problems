const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ");
let count = 0;
const jimin = input.split(" ").map(Number);
const arr = Array.from({ length: n }, (_, i) => i + 1);
for (let i of jimin) {
  const index = arr.findIndex((v) => v === i);

  if (index <= Math.floor(arr.length / 2)) {
    while (arr[0] !== i) {
      count++;
      const head = arr.shift();
      arr.push(head);
    }
    arr.shift();
  } else {
    while (arr[0] !== i) {
      count++;
      const tail = arr.pop();
      arr.unshift(tail);
    }
    arr.shift();
  }
}
console.log(count);
