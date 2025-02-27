function solution(my_string, index_list) {
  var answer = "";

  for (let j = 0; j < index_list.length; j++) {
    answer += my_string[index_list[j]];
  }

  return answer;
}

// charAt 사용한 풀이 -
// charAt : 문자열 내의 다른 위치에 있는 문자들 출력하기
function solution2(my_string, index_list) {
  let answer = "";

  for (let i = 0; i < index_list.length; i++) {
    answer += my_string.charAt(index_list[i]);
  }

  return answer;
}

// map 함수 이용한 풀이
function solution3(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]); //programmers

solution("zpiaz", [1, 2, 0, 0, 3]); //pizza
