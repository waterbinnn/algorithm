/**
 * a = b = c = d 면 1111 * 주사위 값
 * 세개의 값이 같으면 (10 * 같은값 + 다른값)의 2제곱
 * 각각 두개씩 값이 같으면 (같은값 + 다른값) * |같은값 - 다른값|
 * 두개의 값이 같으면 다른 값 * 다른 값
 * a != b != c != d  가장 작은 숫자
 *
 */

function solution(a, b, c, d) {
  let arr = [a, b, c, d].sort((a, b) => a - b);
  let cnt = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let chk = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) chk++;
    }
    if (chk > cnt) cnt = chk;
  }

  if (cnt === 3) {
    // 네개의 값이 다 같은 경우
    return arr[0] * 1111;
  } else if (cnt === 2) {
    //세개의 값이 같은 경우
    if (arr[0] === arr[1]) {
      return Math.pow(10 * arr[0] + arr[3], 2);
    } else {
      return Math.pow(10 * arr[1] + arr[0], 2);
    }
  } else if (cnt === 1) {
    //2개의 값이 같은데
    //나머지는 다른 경우
    if (arr[0] === arr[1] && arr[2] !== arr[3]) {
      return arr[2] * arr[3];
    } else if (arr[1] === arr[2] && arr[0] !== arr[3]) {
      return arr[0] * arr[3];
    } else if (arr[2] === arr[3] && arr[0] !== arr[1]) {
      return arr[2] * arr[0];
    } else if (arr[3] === arr[0] && arr[1] !== arr[2]) {
      return arr[3] * arr[0];
    } else {
      //2개씩 값이 같을 경우
      return (arr[2] + arr[0]) * (arr[2] - arr[0]);
    }
  } else {
    return arr[0];
  }
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
