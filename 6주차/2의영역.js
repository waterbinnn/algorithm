function solution(arr) {
  const startIdx = arr.indexOf(2);
  const endIdx = arr.lastIndexOf(2);

  return startIdx + endIdx < 1 ? [-1] : arr.slice(startIdx, endIdx + 1);
}

console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
