/**
 * k 가 홀수면 ? arr모든 원소 * k : arr 모든 원소 + k
 */

function solution(arr, k) {
  console.log(arr.map((v) => (k % 2 !== 0 ? v * k : v + k)));
}

solution([1, 2, 3, 100, 99, 98], 3);
