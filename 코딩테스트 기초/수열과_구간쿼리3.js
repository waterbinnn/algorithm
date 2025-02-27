/**
 * arr가 있으면 쿼리 안에 있는 숫자들을 순서대로 맞춰간다.
 * 쿼리 안에 query[0]이랑 arr 숫자가 같으면 arr숫자를 query[0]으로 바꾼다.
 * 그리고 query[1]이랑 arr 내 숫자가 같으면 arr 숫자를 query[1]로 바꾼다.
 *
 */

function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  console.log(arr);
  return arr;
}

solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ]
);

function solution2(arr, queries) {
  for (let q = 0; q < queries.length; q++) {
    const [i, j] = queries[q];
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
