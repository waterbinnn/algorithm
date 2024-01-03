function solution(num_list) {
  let answer = num_list.sort((a, b) => a - b).slice(5);
  return answer;
}

solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]);
