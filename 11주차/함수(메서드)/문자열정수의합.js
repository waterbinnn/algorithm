function solution(num_str) {
  let answer = 0;

  //1번 풀이
  for (let i of num_str) {
    answer += parseInt(i);
  }

  //2번 풀이
  num_str.split('').map((n) => (answer += Number(n)));

  //3번 풀이
  [...num_str].reduce((a, c) => a + +c, 0);

  return answer;
}

solution('123456789');
solution('1000000');
