function solution(n, costs) {
  const unionParent = (table, a, b) => {
    a = getParent(table, a);
    b = getParent(table, b);
    if (a < b) {
      table[b] = a;
    } else {
      table[a] = b;
    }
  };

  const hasEquelParent = (set, a, b) => {
    a = getParent(set, a);
    b = getParent(set, b);
    if (a === b) {
      return true;
    } else {
      return false;
    }
  };

  const getParent = (table, x) => {
    if (table[x] === x) {
      return x;
    }
    return getParent(table, table[x]);
  };

  let answer = 0;
  const table = Array.from({ length: n }, (_, i) => i);
  const sorted = costs.sort((a, b) => a[2] - b[2]);
  for (let [a, b, cost] of sorted) {
    if (!hasEquelParent(table, a, b)) {
      answer += cost;
      unionParent(table, a, b);
    }
  }
  return answer;
}
