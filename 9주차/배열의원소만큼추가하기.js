/**
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
양의 정수 배열 arr가 매개변수로 주어질 때,
 arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성
 */

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

solution([5, 1, 4]);
solution([6, 6]);
solution([1]);

function solution2(arr) {
  var answer = [];
  for (let n = 0; n < arr.length; n++) {
    answer = answer.concat(new Array(arr[n]).fill(arr[n]));
  }

  //reduce 사용해 간소화
  //   arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
  console.log(answer);
  return answer;
}

solution2([5, 1, 4]);
