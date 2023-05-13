/**
 * 문제
 * 길이가 같은 두 문자열 str1과 str2가 주어집니다.
 * 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
 */

function solution(str1, str2) {
  var answer = "";

  let arr = [];

  let str1Arr = str1.split("");
  let str2Arr = str2.split("");

  for (let i = 0; i < str1Arr.length; i++) {
    arr.push(`${str1Arr[i]}${str2Arr[i]}`);
  }

  answer = arr.join("");

  return answer;
}

/**다른사람풀이
 * 구조분해할당을 사용하는 풀이가 꽤 .. 심플하고 마음에 든다 ..
 */
function solution2(str1, str2) {
  return [...str1].map((x, i) => x + str2[i]).join("");
}

solution("aaaaa", "bbbbb");
solution2("aaaaa", "bbbbb");
