/**
 * @description
 * 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라
 * 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
 *
 * @example
 * "hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.
 */

function solution(my_string) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  console.log(
    [...my_string]
      .filter((v) => numbers.includes(v))
      .map((v) => Number(v))
      .sort((a, b) => a - b)
  );

  return my_string
    .match(/\d/g) //정규식 활용
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

solution('hi12392');
