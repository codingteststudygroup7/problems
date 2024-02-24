const K = 3;
let count = 0;
const answer = [];
const hanoi = (num, start, target, helper) => {
  if (num === 0) {
    return;
  }
  hanoi(num - 1, start, helper, target);
  count++;
  answer.push(`${start} ${target}`);
  hanoi(num - 1, helper, target, start);
};
hanoi(K, 1, 3, 2);
console.log(count);
console.log(answer.join("\n"));
