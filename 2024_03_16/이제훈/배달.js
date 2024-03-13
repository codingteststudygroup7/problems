function solution(N, road, K) {
  const g = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  for (let [a, b, c] of road) {
    g[a][b] = g[a][b] === 0 ? c : Math.min(g[a][b], c);
    g[b][a] = g[a][b] === 0 ? c : Math.min(g[a][b], c);
  }
  const set = new Set();
  const check = Array(N + 1).fill(false);
  const dfs = (v, time) => {
    set.add(v);
    for (let i = 0; i < g[v].length; i++) {
      if (!check[i] && time + g[v][i] <= K && g[v][i] > 0) {
        check[i] = true;
        dfs(i, time + g[v][i]);
        check[i] = false;
      }
    }
  };
  dfs(1, 0);
  return set.size;
}
