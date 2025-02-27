function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i += 2) arr.push(i);
  return arr;
}

const solution2 = Array.from({ length: n }, (_, i) => i + 1).filter(
  (i) => i % 2 !== 0
);

solution(10);
