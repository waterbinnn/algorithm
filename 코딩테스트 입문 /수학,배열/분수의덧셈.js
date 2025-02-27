function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1; //분자
  const num = num1 * num2; //분모

  const gcd = (p, q) => {
    //분모와 분자의 최대공약수
    if (q === 0) return p;
    return gcd(q, p % q);
  };

  const g = gcd(denum, num);

  console.log([denum / g, num / g]);
  return [denum / g, num / g];
}

solution(1, 2, 3, 4);
