function solution(n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(
      Array(n)
        .fill(0)
        .map((v, index) => (index === i ? 1 : 0))
    );
  }
  return answer;
}

function solution2(n) {
  //[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]배열 생성
  const answer = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }
  console.log(answer);
  return answer;
}
solution2(3);
