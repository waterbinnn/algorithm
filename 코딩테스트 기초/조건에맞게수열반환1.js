/**
 * 정수 배열 arr가 주어집니다.
 *  arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고,
 * 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
 */

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      answer.push(arr[i] / 2);
    } else if (arr[i] <= 50 && arr[i] % 2 === 1) {
      answer.push(arr[i] * 2);
    } else {
      answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer;
}
solution([1, 2, 3, 100, 99, 98]);

function solution2(arr) {
  return arr.map((num) => {
    if (num >= 50 && num % 2 === 0) return num / 2;
    if (num <= 50 && num % 2 === 1) return num * 2;
    return num;
  });
}

console.log(solution2([1, 2, 3, 100, 99, 98]));
