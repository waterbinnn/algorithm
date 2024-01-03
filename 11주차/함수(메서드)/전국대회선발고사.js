/**
 * 참여가 가능한 학생 중 등수가 높은 3명
 * rank: 각 학생들의 선발 고사 등수를 담은 정수 배열
 * attendance: 전국 대회 참여 가능 여부가 담긴 boolean 배열
 *
 * 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 10000 × a + 100 × b + c를 return
 */

function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter((_, i) => attendance[i])
    .sort(([a], [b]) => a - b);

  return 10000 * a[1] + 100 * b[1] + c[1];
}

solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
solution([1, 2, 3], [true, true, true]);
solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true]);
