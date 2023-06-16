function solution(numbers, n) {
  var answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      break;
    }
  }
  console.log(answer);
  return answer;
}
solution([34, 5, 71, 29, 100, 34], 123);
solution([58, 44, 27, 10, 100], 139);
