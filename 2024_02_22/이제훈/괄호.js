const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const check = (str) => {
  const stack = [];
  for (let x of str) {
    if (x === "(") {
      stack.push(x);
      continue;
    }

    const top = stack.pop();
    if (top === "(") {
      return "NO";
    }
  }

  return stack.length > 0 ? "NO" : "YES";
};

const answer = arr.map(check);
console.log(answer.join("\n"));
