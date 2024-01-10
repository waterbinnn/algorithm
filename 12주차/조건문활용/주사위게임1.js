function solution(a, b) {
  const isOdd = (v) => v % 2 !== 0;
  let aT = isOdd(a);
  let bT = isOdd(b);

  let ans =
    aT && bT
      ? Math.pow(a, 2) + Math.pow(b, 2)
      : aT || bT
      ? 2 * (a + b)
      : Math.abs(a - b);

  console.log(ans);
}

solution(3, 5);
solution(2, 4);
solution(6, 1);
