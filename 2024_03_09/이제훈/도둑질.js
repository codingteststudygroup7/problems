function solution(money) {
  const len = money.length;
  const dp1 = Array(len).fill(0);
  const dp2 = Array(len).fill(0);
  dp1[0] = money[0];
  dp1[1] = money[0];
  dp2[1] = money[1];
  for (let i = 2; i < len; i++) {
    dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1]);
    dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i - 1]);
  }
  return Math.max(dp1[len - 2], dp2[len - 1]);
}
