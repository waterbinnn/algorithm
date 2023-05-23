/**
 * 수 조작하기 1 
 * 
 * 문제 설명
정수 n과 문자열 control이 주어집니다. 
control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

"w" : n이 1 커집니다.
"s" : n이 1 작아집니다.
"d" : n이 10 커집니다.
"a" : n이 10 작아집니다.
위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
 */

function solution(n, control) {
  const arr = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };

  for (let i = 0; i < control.length; i++) {
    n += arr[control[i]];
  }
  // console.log(n);
}
solution(0, "wsdawsdassw");

/**
 * 수 조작하기2 
 * 
 * 문제설명
 * 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 
 * 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

"w" : 수에 1을 더한다.
"s" : 수에 1을 뺀다.
"d" : 수에 10을 더한다.
"a" : 수에 10을 뺀다.
그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
 */

function solution2(log) {
  let answer = "";

  const arr = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  let n = log[0];

  for (let i = 0; i < log.length - 1; i++) {
    n = (log[i + 1] - log[i]).toString();
    answer += arr[n];
  }
  console.log(answer);
}

solution2([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
