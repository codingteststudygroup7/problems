function solution(num) {
  let result;
  const recursive = (num, count) => {
    if (num === 1) {
      result = count;
      return;
    }
    if (count === 500) {
      result = -1;
      return;
    }
    return num % 2 === 0 ? recursive(Math.floor(num / 2), count + 1) : recursive(num * 3 + 1, count + 1);
  };
  recursive(num, 0);
  return result;
}
