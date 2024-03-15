function solution(N, road, K) {
  const g = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
  for (const [a, b, c] of road) {
    g[a][b] = g[a][b] === Infinity ? c : Math.min(g[a][b], c);
    g[b][a] = g[b][a] === Infinity ? c : Math.min(g[b][a], c);
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      for (let k = 1; k <= N; k++) {
        g[j][k] = Math.min(g[j][k], g[j][i] + g[i][k]);
      }
    }
  }
  let answer = 1;
  for (let i = 2; i <= N; i++) {
    if (g[1][i] <= K) {
      answer++;
    }
  }
  return answer;
}
