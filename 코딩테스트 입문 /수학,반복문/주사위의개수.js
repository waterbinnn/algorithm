/**
 * @description
 * 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
 * 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
 * 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
 *
 * @제한사항
 * box의 길이는 3입니다.
 * box[0] = 상자의 가로 길이
 * box[1] = 상자의 세로 길이
 * box[2] = 상자의 높이 길이
 * 1 ≤ box의 원소 ≤ 100
 * 1 ≤ n ≤ 50
 * n ≤ box의 원소
 * 주사위는 상자와 평행하게 넣습니다.
 *
 * @example
 * box = [1, 1, 1], n = 1 //1
 * box = [10,8,6], n = 3 //12
 */

function solution(box, n) {
  [x, y, z] = box;
  const answer = Math.floor(x / n) * Math.floor(y / n) * Math.floor(z / n);
  return answer;
}

function solution2(box, n) {
  const getMin = (val) => Math.floor(val / n);
  console.log(box.map((v) => getMin(v)).reduce((a, b) => a * b));

  //한번에 해버리는 방법
  console.log(box.reduce((a, b) => a * Math.floor(b / n), 1));
}

solution([1, 1, 1], 1); //1
solution2([10, 8, 6], 3); //12
