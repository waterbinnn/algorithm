function solution(arr, delete_list) {
  console.log(arr.filter((a) => !delete_list.includes(a)));
}

solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]);
