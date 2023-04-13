function solution(polynomial) {
  const polynomialArr = polynomial.split(" + ");

  let xNum = 0;
  let num = 0;

  // 분리해둔 polynomialArr을 forEach()를 이용해 하나씩 확인
  polynomialArr.forEach((i) => {
    // includes() 메서드를 이용해 학인 중인 요소에 x가 포함되어 있는지 확인

    if (i.includes("x")) {
      /* x가 포함되어있다면 replace() 메서드를 이용해 x를 제거해주고
       만약 x를 제거하였는데 공백일 경우 "1"을 넣어준다. */
      const txt = i.replace("x", "") || "1";

      // 구한 값을 정수로 바꾸어 더해준다.
      xNum += parseInt(txt, 10);
    } else {
      // x가 포함되지 않았다면 숫자이므로 정수형으로 바꾸어 더해준다.
      num += parseInt(i);
    }
  });

  let answer = [];

  // 구해둔 xNum이 1을 경우 공백으로 아니면 그대로 입력하고 뒤에 x를 붙여준다.
  if (xNum) answer.push(`${xNum !== 1 ? xNum : ""}x`);
  if (num) answer.push(num);

  return answer.join("+");
}

solution("3x + 7 + x");
