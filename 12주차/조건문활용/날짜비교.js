function solution(a, b) {
  //1번 풀이
  const newDate = (arr) => {
    return new Date(...arr);
  };
  console.log(+(newDate(a) < newDate(b)));

  //2번 풀이 - 더 간단쓰
  console.log(+(new Date(a) < new Date(b)));
}

solution([2021, 12, 28], [2021, 12, 29]);
solution([1024, 10, 24], [1024, 10, 24]);
