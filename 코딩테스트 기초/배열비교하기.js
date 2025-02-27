/**ㄴ
 * arr1.length < arr2.length return -1
 * arr1.length === arr2.length || arr1.length > arr2.length 일 경우
 * 원소 다 더하고 arr1 이 클 경우 return 1
 * 같은 경우 0
 */

function solution(arr1, arr2) {
  var answer = 0;

  let arrSum1 = 0;
  let arrSum2 = 0;

  for (let i of arr2) {
    arrSum2 += i;
  }
  for (let i of arr1) {
    arrSum1 += i;
  }

  if (arr2.length > arr1.length) {
    answer = -1;
  } else if (arr1.length > arr2.length) {
    answer = 1;
  } else if (arrSum1 === arrSum2) {
    answer = 0;
  } else {
    answer = arrSum2 > arrSum1 ? -1 : 1;
  }

  console.log(answer);
  return answer;
}

solution([49, 13], [70, 11, 2]);
solution([100, 17, 84, 1], [55, 12, 65, 36]);

const solution2 = (arr1, arr2) => {
  let answer = 0;
  arr1Sum = arr1.reduce((a, b) => a + b);
  arr2Sum = arr2.reduce((a, b) => a + b);

  if (arr1.length !== arr2.length) {
    answer = arr1.length > arr2.length ? 1 : -1;
  } else {
    answer = arr1Sum > arr2Sum ? 1 : arr1Sum === arr2Sum ? 0 : -1;
  }
  console.log(answer);
};

solution2([49, 13], [70, 11, 2]);
solution2([100, 17, 84, 1], [55, 12, 65, 36]);
