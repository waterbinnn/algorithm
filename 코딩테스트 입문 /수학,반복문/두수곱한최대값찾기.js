/**
 * @description
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 *
 * @example
 * [1, 2, 3, 4, 5] 두 수의 곱중 최댓값은 4 * 5 = 20 입니다
 * [0, 31, 24, 10, 1, 9] 두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
 */

function solution(numbers) {
  const answer1 = numbers
    .sort((a, b) => a - b)
    .slice(numbers.length - 2)
    .reduce((prev, curr) => prev * curr);
  console.log(answer1);

  //깔쌈한 방법
  const [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}

solution([1, 2, 3, 4, 5]);
solution([0, 31, 24, 10, 1, 9]);
