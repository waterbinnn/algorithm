/**
 * 문제
 * 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
 * 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
 * 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
 * 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
 */

const solution = (a, b, c) => {
  let answer = 0;
  const one = a + b + c;
  const two = a ** 2 + b ** 2 + c ** 2;
  const three = a ** 3 + b ** 3 + c ** 3;

  if (a == b && b == c) {
    answer = one * two * three;
  } else if (a == b || b == c || a == c) {
    answer = one * two;
  } else {
    answer = one;
  }
  console.log(answer);
};

solution(5, 3, 3);
solution(4, 4, 4);
