/**
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
 * my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

function solution(my_string, s, e) {
  var answer = "";
  const flip = (str, s, e) => {
    return str
      .slice(s, e + 1)
      .split("")
      .reverse()
      .join("");
  };

  answer =
    my_string.slice(0, s) + flip(my_string, s, e) + my_string.slice(e + 1);

  return answer;
}

solution("Progra21Sremm3", 6, 12);
solution("49gh43jOIQvkSH", 5, 5);

function solution2(my_string, s, e) {
  let answer = "";
  let str = my_string.substring(s, e + 1);
  let newStr = str.split("").reverse().join("");

  answer = my_string.replace(str, newStr);
  return answer;
}
