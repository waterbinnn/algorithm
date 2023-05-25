/*
 * l <= r 정수
 * 숫자 0 5로만 이루어진 정수
 * 오름차순 배열
 * 없으면 -1
 *
 */

function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    const str = String(i).split("");
    if (str.every((e) => e === "5" || e === "0"));

    // * every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트 - return boolean
    // 5, 0 을 포함하고 있는지 테스트 , 포함한다면 answer에 push

    answer.push(i);
  }

  return answer.length ? answer : [-1];
}

solution(5, 555);
