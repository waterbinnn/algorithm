/**
 * @description 합성수 찾기
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 * @example
 * 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
 * 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.
 */

function solution(n) {
  let count = 0;
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 3; i <= arr.length; i++) {
    if (getDivisor(arr[i]) >= 3) {
      //합성수 약수 개수 : 3 이상일 때만 카운트
      count++;
    }
  }
  return count;
}

/**
 * 약수의 개수 구하는 공식
 * N = 10
 * 소인수 분해: 10 = 2^1 × 5^1
 * 공식 적용: (1+1)×(1+1)= 4
 * 약수: {1, 2, 5, 10} (4개)
 */

function getDivisor(n) {
  let count = 1;
  //제곱급까지만 반복
  for (let i = 2; i <= Math.sqrt(n); i++) {
    let exponent = 0; //i에 대한 지수 저장

    while (n % i === 0) {
      n /= i;
      exponent++;
    }
    if (exponent > 0) count *= exponent + 1;
  }

  if (n > 1) count *= 2;
  return count;
}

getDivisor(10);
solution(10);

function solution2(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    arr = arr.filter((v) => v % i !== 0 || v <= i);
    //i의 배수 제거 i가 v 보다 크다면 제거 X
    // 2의 배수 제거시 v<=2 때문에 1,2 제거되지 않음
    // 3의 배수 제거시 v<=3 때문에 1,2,3 제거되지 않음
  }
  console.log(n - arr.length); //제거된(소수)개수를 뺀다.
}

solution2(10);
