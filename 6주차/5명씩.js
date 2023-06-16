function solution(names) {
  var answer = [];

  for (let i = 0; i < names.length; i++) {
    if (i % 5 === 0) {
      answer.push(names[i]);
    }
  }
  console.log(answer);
  return answer;
}

solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]);

/**
 *  for(let i = 0; i < names.length; i += 5){ 아예 5 씩 돌리는 방법도~
        answer.push(names[i])
    }
 */
