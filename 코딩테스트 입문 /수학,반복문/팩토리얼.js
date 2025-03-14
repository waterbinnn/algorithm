/**
 * @description
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
 * 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록
 * solution 함수를 완성해주세요.
 * 조건 : i! <= n
 *
 * @example
 * 10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
 * 3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.
 */

function solution(n) {
  let factorial = 1;
  let i = 0;

  while (factorial <= n) {
    // factorial이 n을 초과할 때까지 반복
    i++;
    console.log(factorial);
    factorial *= i; //팩토리얼 계산 (factorial = factorial * i)
  }
  return i - 1;
}

solution(3628800);
solution(7);
