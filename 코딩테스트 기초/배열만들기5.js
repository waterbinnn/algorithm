/**
 * inStrs 의 각 원소마다 s 번 인덱스에서 시작하는 길이 l 짜리 부분 문자열 잘라 정수로 변환
 * answer = 변환한 정수가 k 보다 큰 값
 */

function solution(intStrs, k, s, l) {
  var answer = [];

  for (let i in intStrs) {
    let num = intStrs[i].slice(s, l + s);
    // let num = intStrs[i].substring(s, s + l);

    if (num > k) {
      answer.push(Number(num));
    }
  }
  console.log(answer);
  return answer;
}

solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);
