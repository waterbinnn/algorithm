/**
 * @description
 * 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
 * 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
 *
 * @제한사항
 * 2 < numbers의 길이 < 100
 * 0 < k < 1,000
 * numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
 * numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.
 *
 * @example
 * numbers	k	result
 * [1, 2, 3, 4], 2 => 3
 * [1, 2, 3, 4, 5, 6], 5 => 3
 * [1, 2, 3], 3 => 2
 */

// numbers에서 i+2 뒤에 , 홀수단위로 공을 넘겨줌
// k 번까지 플레이한다고 가정하고 k 번째 사람의 번호를 리턴

function solution(numbers, k) {
  let player = [];
  let index = 0;

  for (let i = 0; i < k; i++) {
    player.push(numbers[index]); // 현재 번호 추가
    index = (index + 2) % numbers.length; // 한 명 건너뛰면서 순환
  }
  console.log(player[k - 1]);
  return player[k - 1];
}

solution([1, 2, 3, 4], 2); //3
solution([1, 2, 3, 4, 5, 6], 5); //3
solution([1, 2, 3], 3); //2

function solution2(numbers, k) {
  //등차수열
  //k번째 공을 던질 때의 인덱스: 2 * (k - 1)
  return numbers[(2 * (k - 1)) % numbers.length];
}

console.log(solution2([1, 2, 3, 4, 5, 6], 5)); //3
