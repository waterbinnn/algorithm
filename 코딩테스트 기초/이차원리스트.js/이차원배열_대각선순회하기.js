/**
 * i + j <= k 를 만족하는 모든 i,j 에 대한 board[i][j] 의 합
 */

function solution(board, k) {
  let ans = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i + j <= k) {
        ans += board[i][j];
      }
    }
  }
  console.log(ans);
  return ans;
}

solution(
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
  ],
  2
);
