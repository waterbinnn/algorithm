/**
 * 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를,
 * 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return
 * 없으면 []
 */

function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      return str_list.slice(0, i);
    }
    if (str_list[i] === "r") {
      return str_list.slice(i + 1);
    }
  }
  return [];
}

solution(["u", "u", "l", "r"]);
solution(["i"]);
