/**
 * 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return
 */

function solution(num_list) {
  var answer = 1;

  num_list.map((num) => {
    if (num_list.length >= 11) answer += num;
    else {
      answer *= num;
    }
  });

  return num_list.length >= 11 ? answer - 1 : answer;
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));

function solution2(num_list) {
  var answer = 0;
  if (num_list.length >= 11) {
    answer = num_list.reduce((a, i) => a + i);
  } else {
    answer = num_list.reduce((a, i) => a * i);
  }
  return answer;
}
console.log(solution2([2, 3, 4, 5]));
