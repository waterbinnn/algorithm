/**
 * 배열 , idx 가 주어졌을 때
 * idx보다 크고, 배열의 값이 1 인 가장 작은 인덱스 반환
 * return 값이 인덱스
 */

function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));

function solution2(arr, idx) {
  // arr.indexOf(searchElement[, fromIndex])
  console.log(arr.indexOf(1, idx));
}
solution2([1, 1, 1, 1, 0], 3);
