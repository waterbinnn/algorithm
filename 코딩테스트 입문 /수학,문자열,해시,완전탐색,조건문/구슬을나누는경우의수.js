/**
 * @description
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
 *  balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 *
 * @example
 * 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
 * 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.
 */

function solution(ball, share) {
  // 재귀함수를 이용한 식
  const factorial = (n) => {
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  //   return factorial(ball) / (factorial(ball - share) * factorial(share));
  return Math.round(
    factorial(ball) / factorial(ball - share) / factorial(share)
  ); //위보다 런타임 에러 줄어들음
}

function solution2(ball, share) {
  // 배열을 만들어서 값을 곱하는 식
  const factorial = (num) =>
    Array.from({ length: num }, (_, i) => i + 1).reduce((a, c) => (a *= c), 1); //[3,2,1]

  return Math.round(
    factorial(ball) / factorial(ball - share) / factorial(share)
  );
}

console.log(solution(3, 2)); //3
console.log(solution(5, 3)); //10
