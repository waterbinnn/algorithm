function solution(n_str) {
  //형변환 방식
  console.log(String(+n_str));

  //정규표현식
  console.log(n_str.replace(/^0+/, ''));
}

solution('0010');
solution('854020');
