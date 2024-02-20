function solution(phone_number) {
  let len = phone_number.length;
  let count = 0;
  let last4letters = "";
  for (let i = 0; i < len; i++) {
    if (i < len - 4) {
      count++;
    } else {
      last4letters += phone_number[i];
    }
  }
  return "*".repeat(count) + last4letters;
}
