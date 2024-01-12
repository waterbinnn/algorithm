function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); //배열 생성
  let [num, row, col] = [1, 0, 0];

  for (let i = n; i > 0; i -= 2) {
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;

    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--;
    col--;

    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;

    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }
  console.log(result);
  return result;
}

solution(4);
