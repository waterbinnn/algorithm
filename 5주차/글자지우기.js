/**
 * 문자열 my_string과 정수 배열 indices가 주어질 때,
 * my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고
 *  이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

function solution(my_string, indices) {
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i];
    }
  }
  console.log(answer);
  return answer;
}

solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]);

function solution3(my_string, indices) {
  const arr = [...my_string];
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = "";
  }
  return arr.join("");
}

function solution3(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join("");
}
