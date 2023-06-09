function solution(str) {
  let answer = Array(52).fill(0);

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code >= 97 && code <= 122) answer[code - 71]++;
    else answer[code - 65]++;
  }

  console.log(answer);
  return answer;
}

solution("programmers");

function solution2(str) {
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let a = [];
  a.length = 52;
  a.fill(0);

  str.split("").map((n) => {
    a[al.indexOf(n)] += 1;
  });
  console.log(a);
  return a;
}

solution2("programmers");
