function solution(num_list, n) {
  var answer = [];
  answer = [...num_list.slice(n), ...num_list.slice(0, n)];
  console.log(answer);
  return answer;
}

solution([5, 2, 1, 7, 5], 3);
