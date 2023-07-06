/**
 * 랜덤으로 서로 다른 k개의 수 저장한 배열
 * 일정 범위 내에서 무작위로 수를 뽑은 후 , 지금까지 나온 적 없는 수이면 배열 맨 뒤에 push
 *
 * k : 배열의 길이
 *
 * 완성될 배열의 길이 < k , -1 push
 *
 * new Set길이가 k 보다 크면 k만큼 자르고 , 작으면 -1 fill
 */

function solution(arr, k) {
  var answer = [];
  let newArr = [...new Set(arr)];

  if (newArr.length > k - 1) {
    answer = newArr.slice(0, k);
  } else {
    answer = [...newArr, ...Array(k - newArr.length).fill(-1)];
  }
  console.log(answer);
  return answer;
}

solution([0, 1, 1, 2, 2, 3], 3);
solution([0, 1, 1, 1, 1], 4);

/*더 깔끔하게*/
function solution2(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}
