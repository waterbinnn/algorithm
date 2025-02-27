/**
 * arr.length 가 2의 거듭제곱이어야 함
 * 최소의 거듭제곱 길이를 갖도록 0 push
 */

function solution(arr) {
  const totalLength = 2 ** Math.ceil(Math.log2(arr.length)); //최소의 거듭제곱 갖도록 계산

  return [...arr, ...new Array(totalLength - arr.length).fill(0)];
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([1, 2, 3, 4]));

function solution2(arr) {
  const len = arr.length;
  let i = 0;

  while (true) {
    const num = 2 ** i;

    if (len > num) {
      i++;
    } else {
      for (let i = 0; i < num - len; i++) {
        arr.push(0);
      }

      return arr;
    }
  }
}
