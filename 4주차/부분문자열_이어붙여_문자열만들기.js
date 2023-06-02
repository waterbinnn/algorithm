function solution(my_strings, parts) {
  var answer = "";

  for (let i in my_strings) {
    answer += my_strings[i].substring(
      parts[i][0],
      parts[i][0] !== parts[i][1] ? parts[i][1] + 1 : parts[i][0] + 1
    );
  }
  console.log(answer);
  return answer;
}

solution(
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ]
); //programmers

// map 사용한 풀이
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}
