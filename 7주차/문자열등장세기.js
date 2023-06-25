/**문제
 * 문자열 myString과 pat이 주어집니다.
 * myString에서 pat이 등장하는 횟수를 return
 */

function solution(myString, pat) {
  var answer = 0;

  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("banana", "ana"));

/**문제
 * 문자열 배열 strArr가 주어집니다.
 *  배열 내의 문자열 중 "ad"라는 부분 문자열을
 * 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여
 * 배열로 return 하는 solution
 */
function solution2(strArr) {
  return strArr.filter((a) => !a.includes("ad"));
}

console.log(solution2(["and", "notad", "abcd"]));
console.log(solution2(["there", "are", "no", "a", "ds"]));
