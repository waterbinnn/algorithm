/**
 * arr 행의 수, 열의 수가 같아야 함
 * arr[i][i] length > arr[i] 라면 arr에 i length 만큼의 fill(0) 배열 생성
 */

function solution(arr) {
  const rowLeng = arr.length;
  const colLeng = arr[0].length;

  if (rowLeng > colLeng) {
    const newArr = Array(rowLeng - colLeng).fill(0);
    return arr.map((a) => [...a, ...newArr]);
  }

  if (colLeng > rowLeng) {
    for (let i = 0; i < colLeng - rowLeng; i++) {
      const newArr = Array(colLeng).fill(0);
      arr.push(newArr);
    }
  }
  console.log(arr);
  return arr;
}

function solution2(arr) {
  const n = Math.max(arr.length, arr[0].length);

  for (let a of arr) {
    while (a.length < n) {
      a.push(0);
    }
  }
  while (arr.length < n) {
    arr.push(Array(n).fill(0));
  }
  console.log(arr);
  return arr;
}

solution2([
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
]);

// solution([
//   [57, 192, 534, 2],
//   [9, 345, 192, 999],
// ]);

// solution([
//   [1, 2],
//   [3, 4],
// ]);
