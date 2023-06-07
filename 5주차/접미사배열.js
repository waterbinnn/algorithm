/**
 * 문제 설명
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 */

function solution(my_string) {
  let answer = [];
  let str = "";

  for (let i = 0; i < my_string.length; i++) {
    str = my_string.substring(i);
    answer.push(str);
  }

  console.log(answer.sort());
}

solution("banana");

/**
 * 문제:
 * 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성
 */

function solution2(my_string, is_suffix) {
  let arr = [];
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string.substring(i));
  }

  // for (let str of arr) {
  //   if (is_suffix === str) {
  //     answer = 1;
  //   }
  // }
  answer = arr.includes(is_suffix) ? 1 : 0;

  console.log(answer);
  return answer;
}

solution2("banana", "ana");

/**
 * 다른 풀이
 * endsWith : endsWith() 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환
 * 문법 : str.endsWith(searchString[, length])
 */

function solution3(my_string, is_suffix) {
  return my_string.slice(my_string.length - is_suffix.length) === is_suffix
    ? 1
    : 0;
}

const solution4 = (str, suff) => (str.endsWith(suff) ? 1 : 0);
