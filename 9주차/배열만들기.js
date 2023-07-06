/**
 * i = 0 , arr.length > i 이면 반복
 * if (stk.length === 0) stk.push(arr[i]) i+1
 * if (stk.length > 0 && srk[stk.length-1] === arr[i]) stk.pop() i + 1
 * if (stk.length > 0 && stk[stk.length-1] !== arr[i]) stk.push(arr[i]) i+1
 * return stk
 */
function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
    } else {
      answer[answer.length - 1] === arr[i] ? answer.pop() : answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer.length ? answer : [-1];
}

solution([0, 1, 1, 1, 0]);
solution([0, 1, 0, 1, 0]);
