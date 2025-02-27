/**
 * 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를
 * 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

function solution(n, k) {
  var arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      console.log(i);
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

solution(15, 5);
