/**
 * arr.length % 2 === 0 ? 홀수 인덱스에 n을 더한 배열 return
 * arr.length % 2 === 1 ? 짝수 인덱스에 n을 더한 배열 return
 */

function solution(arr, n) {
  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        arr[i] = arr[i] + n;
        break;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr[i] = arr[i] + n;
        break;
      }
    }
  }
  console.log(arr);

  return arr;
}

solution([49, 12, 100, 276, 33], 27);
solution([444, 555, 666, 777], 100);

/**위 코드를 간소화 해본..  */

function solution2(arr, n) {
  const answer =
    arr.length % 2 === 0
      ? arr.map((v, i) => (i % 2 !== 0 ? v + n : v))
      : arr.map((v, i) => (i % 2 === 0 ? v + n : v));

  return answer;
}

/**map을 한 번만 쓴 풀이 */
function solution3(arr, n) {
  arr.map((v, i) => (arr.length % 2 !== i % 2 ? v + n : v));
}
