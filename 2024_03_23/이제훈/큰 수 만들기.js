function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  while (k !== 0) {
    stack.pop();
    k--;
  }

  return stack.join("");
}
