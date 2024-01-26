function solution(num_list) {
  const reverseArr = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    reverseArr.push(num_list[i]);
  }
  //2번 방법
  let arr = [];
  num_list.forEach((i) => arr.unshift(i));
  console.log(arr);

  //simple method
  return num_list.reverse();
}

solution([1, 2, 3, 4, 5]);
solution([1, 0, 1, 1, 1, 3, 5]);
