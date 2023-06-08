function solution(my_string, m, c) {
  var answer = "";
  let arr = [];
  for (let i = 0; i < my_string.length; i += m) {
    arr = my_string.substring(i, i + m).split("");
    answer += arr[c - 1];
  }

  return answer;
}

solution("ihrhbakrfpndopljhygc", 4, 2); //happy
