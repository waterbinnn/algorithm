function solution(a, b) {
  //1번 풀이 - 오답
  console.log(String(+a + +b));
  /* 이렇게 했을 경우 아래 예시에서 오답이 남.
    결과 : 실행한 결괏값 "305793246910280500000"이 기댓값 "305793246910280479981"과 다릅니다.
     Number로 표현할 수 있는 값의 범위를 넘어서 0으로 채워지기 때문 
     이 범위를 포용할 수 있는 타입이 BigInt 이다.
     */

  //2번 풀이 - 정답
  console.log(String(BigInt(a) + BigInt(b)));
}

solution('18446744073709551615', '287346502836570928366');
