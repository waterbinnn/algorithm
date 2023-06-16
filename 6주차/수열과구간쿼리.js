function solution(arr, queries) {
  for (let [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  }
  console.log(arr);
  return arr;
}

solution(
  [0, 1, 2, 3, 4],
  [
    [0, 1],
    [1, 2],
    [2, 3],
  ]
);
