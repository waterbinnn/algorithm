function solution(strArr) {
  var answer = [];
  for (let i in strArr) {
    i % 2 === 0
      ? answer.push(strArr[i].toLowerCase())
      : answer.push(strArr[i].toUpperCase());
  }
  return answer;
}

solution(["AAA", "BBB", "CCC", "DDD"]);
solution(["aBc", "AbC"]);
