const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = nk.split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (j >= arr[i - 1][0]) {
      dp[i][j] = Math.max(dp[i - 1][j - arr[i - 1][0]] + arr[i - 1][1], dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}
console.log(dp[N][K]);
