/**더크게 합치기
 *  연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
 *
 * 12 ⊕ 3 = 123
 * 3 ⊕ 12 = 312
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
 * 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
 *
 * 입출력 예 #1
 * a ⊕ b = 991 이고, b ⊕ a = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.
 *
 * 입출력 예 #2
 * a ⊕ b = 898 이고, b ⊕ a = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.
 */

function solution(a, b) {
  var answer = 0;
  let str1 = a.toString() + b.toString();
  let str2 = b.toString() + a.toString();

  if (str1 > str2) {
    answer = Number(str1);
  } else if (str1 === str2) {
    answer = Number(str1);
  } else {
    answer = Number(str2);
  }

  return answer;
}

/**다른사람풀이 */

function solution(a, b) {
  return `${a}${b}` > `${b}${a}` ? Number(`${a}${b}`) : Number(`${b}${a}`);
}

function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const ba = Number(`${b}${a}`);

  return Math.max(ab, ba);
}
