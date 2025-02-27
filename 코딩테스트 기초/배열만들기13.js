/**
 * arr 의 인덱스를 담은게 intervals
 * intervals의 첫번째 배열내 인덱스 저장 + 두번째 배열 내 인덱스 저장
 * arr에서 interval[0]의 값 slice
 */

function solution(arr, intervals) {
  var answer = [];

  for (let i = 0; i < intervals.length; i++) {
    answer.push(...arr.slice(intervals[i][0], intervals[i][1] + 1));
  }
  console.log(answer);
  return answer;
}

solution(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ]
);

function solution2(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}
solution2(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ]
);
