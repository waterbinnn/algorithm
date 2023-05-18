/**
 * 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list) {
  var answer = 0;
  /*
    모든 원소들의 곱셈 <
    모든 원소들의 합의 제곱 = 1
    */
  let multi = 1;
  let add = 0;

  for (let i = 0; i < num_list.length; i++) {
    multi *= num_list[i];
    add += num_list[i];
  }
  add = Math.pow(add, 2);

  if (multi < add) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

/**if 문 쓰기보다는 return 에서 식을 써주는 방법 .. */
function solution(num_list) {
  let accMul = 1;
  let accSum = 0;
  for (const num of num_list) {
    accMul *= num;
    accSum += num;
  }
  return accMul < accSum ** 2 ? 1 : 0;
}

/**reduce 써주는 방법 */

function solution(num_list) {
  return Math.pow(
    num_list.reduce((a, b) => a + b),
    2
  ) > num_list.reduce((a, b) => a * b)
    ? 1
    : 0;
}
