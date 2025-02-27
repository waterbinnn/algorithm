/**
 * 정수 배열 arr, 새로운 배열 stk
 * 변수 i = 0
 * i < arr.length 라면
 *   stk = [] -> arr[i+1] push
 *   stk[stk.length-1] < arr[i] 이면 stk.push(arr[i+1])
 *   stk.length > 0 , stk[stk.length-1] >= arr[i] 이면 stk 마지막 원소 제거
 *   return stk
 */

function solution(arr) {
  var stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length) {
      if (stk.length === 0) {
        stk.push(arr[i]);
      } else if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
      } else if (stk[stk.length - 1] >= arr[i]) {
        stk.pop();
        i--;
      }
    }
  }
  console.log(stk);
  return stk;
}

solution([1, 4, 2, 5, 3]);

function solution2(arr) {
  var stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }
  return stk;
}

solution2([1, 4, 2, 5, 3]);
