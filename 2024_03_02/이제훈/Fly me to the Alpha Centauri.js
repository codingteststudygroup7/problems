const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((v) => v.split(" ").map(Number));
const answer = [];
let a;
let b;
for (let [x, y] of arr) {
  const distance = y - x;
  if (Math.sqrt(distance) % 1 === 0) {
    answer.push(2 * Math.sqrt(distance) - 1);
  } else {
    a = Math.pow(Math.ceil(Math.sqrt(distance)), 2);
    b = Math.pow(Math.ceil(Math.sqrt(distance)) - 1, 2) + 1;
    if ((a + b) / 2 <= distance) {
      answer.push(2 * Math.ceil(Math.sqrt(distance)) - 1);
    } else {
      answer.push(2 * Math.ceil(Math.sqrt(distance)) - 2);
    }
  }
}
console.log(answer.join("\n"));
