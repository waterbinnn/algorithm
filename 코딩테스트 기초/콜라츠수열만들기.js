/**
 * 문제 : 콜라츠 수열
 *
 * 모든 자연수 x에 대해 현재 값이 x면
 * x가 짝수일 때는 2로 나눈다.
 * x가 홀수일 때는 3 * x + 1
 * 언젠간 반드시 1이 된다.
 */

function solution(n) {
  var answer = [n];

  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else n = 3 * n + 1;
    answer.push(n);
  }

  /**또는 더 간략화 가능
   *  while(n != 1) {
        n = n % 2 == 0 ? n / 2 : 3 * n + 1;
        answer.push(n);
    }
   */

  console.log(answer);
  return answer;
}

solution(10); //[10,5,16,8,4,2,1]

/**
 * 다른 풀이
 */

function solution2(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}
