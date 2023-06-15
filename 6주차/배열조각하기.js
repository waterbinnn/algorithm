/**
 * arr
 * query -> 짝수일 때 arr 에서 query[i] (짝수인 인덱스) 제외 인덱스 뒷부분 slice
 * query -> 홀수일 때 arr 에서 query[i] (홀수인 인덱스) 제외 인덱스 앞부분 slice
 */

function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    const cur = query[i];

    if (i % 2 === 0) {
      arr.splice(cur + 1, arr.length - (cur + 1));
    } else {
      arr.splice(0, cur);
    }
  }

  return arr;
}
solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);

function solution2(arr, query) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      end = start + query[i];
    } else {
      start += query[i];
    }
  }
  const answer = arr.slice(start, end);
  return answer.length ? answer : [-1];
}
solution2([0, 1, 2, 3, 4, 5], [4, 1, 2]);
