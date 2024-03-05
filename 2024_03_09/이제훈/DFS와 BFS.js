const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [NMT, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, V] = NMT.split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const g = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const check1 = Array(N + 1).fill(false);
const dfsPath = [];
arr.forEach(([a, b]) => {
  g[a][b] = 1;
  g[b][a] = 1;
});
const dfs = (v) => {
  dfsPath.push(v);
  for (let i = 0; i < g[v].length; i++) {
    if (g[v][i] === 1 && !check1[i]) {
      check1[i] = true;
      dfs(i);
    }
  }
};
check1[V] = true;
dfs(V);

const bfsPath = [];
const check2 = Array(N + 1).fill(false);
const queue = [[V, `${V}`]];
check2[V] = true;
while (queue.length > 0) {
  const [current, path] = queue.shift();
  bfsPath.push(current);
  for (let i = 0; i < g[current].length; i++) {
    if (g[current][i] === 1 && !check2[i]) {
      check2[i] = true;
      queue.push([i, path + `${i}`]);
    }
  }
}

console.log(dfsPath.join(" "));
console.log(bfsPath.join(" "));
