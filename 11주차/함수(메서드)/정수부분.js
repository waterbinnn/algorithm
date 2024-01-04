function solution(flo) {
  //1번 풀이
  let answer = '';
  answer = flo.toString().split('.')[0];

  //2번 풀이 - Math 연산자
  //   return Math.trunc(flo);
  //   return Math.floor(flo)

  //return parseInt(flo)

  /* return ~~flo 
  -> NOT연산자를 두번 사용하여 32비트 정수로 변환하고 각비트를 뒤집음
   이 때 부호비트를 포함한 모든 비트가 뒤집히면서 소수점 아래를 버리고 정수부분만 남는다 */

  return Number(answer);
}

solution(1.42);
solution(69.32);
