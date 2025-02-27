/**
 * 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때
 * 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요
 */

function solution(q, r, code) {
  var answer = "";
  let arr = [];
  let newArr = [];

  for (let i = 0; i < code.length; i++) {
    arr.push(i);
  }

  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j] % q);
    if (arr[j] % q === r) {
      newArr.push(code[j]);
    }
  }
  answer = newArr.join("");
  console.log(answer);

  return answer;
}

solution(3, 1, "qjnwezgrpirldywt");
solution(1, 0, "programmers");

function solution2(q, r, code) {
  let answer = "";
  [...code].map((v, idx) => (idx % q === r ? (answer += v) : answer));
  return answer;
}
