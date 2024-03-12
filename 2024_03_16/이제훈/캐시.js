function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const index = cache.findIndex((v) => v === city);
    if (index > -1) {
      cache.unshift(cache.splice(index, 1)[0]);
      answer++;
    } else {
      answer += 5;
      if (cache.length >= cacheSize) {
        cache.pop();
        cache.unshift(city);
      } else {
        cache.unshift(city);
      }
    }
  }
  return answer;
}
