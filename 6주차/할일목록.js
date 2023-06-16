function solution(todo_list, finished) {
  var answer = [];

  for (let i = 0; i < finished.length; i++) {
    if (!finished[i]) {
      answer.push(todo_list[i]);
    }
  }
  console.log(answer);
  return answer;
}

solution(
  ["problemsolving", "practiceguitar", "swim", "studygraph"],
  [true, false, true, false]
);
