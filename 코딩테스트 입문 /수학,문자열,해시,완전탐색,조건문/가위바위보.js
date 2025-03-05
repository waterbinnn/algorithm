/**
 * @description
 * 가위는 2 바위는 0 보는 5로 표현합니다.
 * 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
 * rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
 *
 * @example
 * "2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.
 * "205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.
 */

function solution(rsp) {
  const winner = {
    0: 5,
    2: 0,
    5: 2,
  };
  console.log(
    rsp
      .split('')
      .map((v) => winner[v])
      .join('')
  );
}

solution('2'); //"0"
solution('205'); //"052"
