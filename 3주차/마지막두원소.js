/**
 * 
문제 설명
정수 리스트 num_list가 주어질 때,
마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여
return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list) {
  var answer = [];
  for (i = 0; i < num_list.length; i++) {
    if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
      answer = [
        ...num_list,
        num_list[num_list.length - 1] - num_list[num_list.length - 2],
      ];
    } else {
      answer = [...num_list, num_list[num_list.length - 1] * 2];
    }
  }
  console.log(answer);
  return answer;
}

solution([2, 1, 6]);
solution([5, 2, 1, 7, 5]);

/* reverse 를 이용해서 한 풀이 */
function solution2(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

solution2([2, 1, 6]);
solution2([5, 2, 1, 7, 5]);
