/**
 * @description
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
 * 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * @example
 * 입출력 예
 * emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
 * emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
 * emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.
 */

function solution(emergency) {
  let sortedArr = emergency.slice().sort((a, b) => b - a);
  console.log(emergency.map((x) => sortedArr.indexOf(x) + 1));
}

solution([3, 76, 24]);

/**
 * slice() : 얕은 복사를 하여 기존 배열을 변경하지 않고 새로운 배열을 할당해준다.
 **/
