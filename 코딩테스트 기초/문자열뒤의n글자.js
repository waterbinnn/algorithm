function solution(my_string, n) {
  var answer = "";
  answer = my_string.slice(my_string.length - n);

  console.log(answer);
  return answer;
}

solution("ProgrammerS123", 11);
