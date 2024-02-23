function solution(number) {
  let answer = 0;
  const dfs = (level, start, sum) => {
    if (level === 3) {
      if (sum === 0) {
        answer++;
      }
      return;
    }
    for (let i = start; i < number.length; i++) {
      dfs(level + 1, i + 1, sum + number[i]);
    }
  };
  dfs(0, 0, 0, []);
  return answer;
}
const result = solution([-2, 3, 0, 2, -5]);
