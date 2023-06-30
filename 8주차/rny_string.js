/**문제
 * 문자열 rny_string이 주어질 때,
 * rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을
 * return 하는 solution 함수를 작성
 */

function solution(rny_string) {
  return [...rny_string].map((v) => (v === "m" ? "rn" : v)).join("");
}

solution("masterpiece");
solution("programmers");
