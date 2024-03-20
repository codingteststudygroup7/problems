function solution(order) {
  let answer = 0;
  const stack = [];
  for (let i = 1; i <= order.length; i++) {
    stack.push(i);
    while (stack.length > 0 && stack[stack.length - 1] === order[answer]) {
      answer++;
      stack.pop();
    }
  }
  return answer;
}
