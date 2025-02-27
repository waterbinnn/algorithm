/**
 * 문제
 * 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다.
 *  첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
 *  이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
 */

/**스레기같은 내 코드 ..  */
function solution(a, d, included) {
  var an = a;
  let answer = 0;
  let arr = [a];
  let t = [];

  for (let i = 0; i < included.length; i++) {
    arr.push((an += d));
  }

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      t.push(arr[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    answer += t[i];
  }

  return answer;
}

solution(3, 4, [true, false, false, true, true]);

/**map을 활용한 풀이 */
function solution(a, d, included) {
  var answer = 0;
  included.map((x, i) => {
    if (x) answer += a + d * i;
  });
  return answer;
}

/**reduce를 활용한 풀이 */
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}

/**비슷하지만 훨씬 .. */
function solution(a, d, included) {
  var answer = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + d * i;
    }
  }
  return answer;
}
