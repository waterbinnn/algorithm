function solution(num_list) {
  var answer = 0;

  const arrFunc = (n) => {
    let num = n;
    if (num === 1) return num;

    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = (num - 1) / 2;
      answer++;
    }
    return arrFunc(num);
  };

  for (let a of num_list) {
    arrFunc(a);
  }
  return answer;
}

console.log(solution([12, 4, 15, 1, 14]));

function solution2(num_list) {
  var answer = 0;
  //nunm_list 각 숫자를 포이치로
  num_list.forEach((num) => {
    while (num !== 1) {
      if (num % 2 == 0) {
        num = num / 2;
        answer = answer + 1;
      } else {
        num = (num - 1) / 2;
        answer = answer + 1;
      }
    }
  });
  return answer;
}

function solution3(num_list) {
  var answer = 0;

  for (let i = 0; i < num_list.length; i++) {
    let num = num_list[i];
    while (num != 1) {
      num = num % 2 == 0 ? num / 2 : (num - 1) / 2;
      answer++;
    }
  }
  return answer;
}
