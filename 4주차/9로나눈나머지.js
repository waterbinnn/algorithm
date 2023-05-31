function solution(number) {
  let a = 0;

  for (let i of number) {
    a += Number(i);
  }

  return a % 9;
}

solution("123");
solution("78720646226947352489");
