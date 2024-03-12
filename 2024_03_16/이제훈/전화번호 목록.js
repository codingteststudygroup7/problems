function solution(phone_book) {
  const obj = {};
  for (let i = 0; i < phone_book.length; i++) {
    obj[phone_book[i]] = true;
  }
  for (let i = 0; i < phone_book.length; i++) {
    let temp = "";
    for (let j = 0; j < phone_book[i].length; j++) {
      temp += phone_book[i][j];
      if (temp in obj && temp !== phone_book[i]) {
        return false;
      }
    }
  }
  return true;
}
