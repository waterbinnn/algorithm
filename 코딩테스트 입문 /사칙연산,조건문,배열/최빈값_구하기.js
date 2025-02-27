function solution(arr) {
  let result = [];
  const newObj = {};

  arr.forEach((item) => {
    newObj[item] ? (newObj[item] += 1) : (newObj[item] = 1);
  });

  for (let i in newObj) {
    result.push([i, newObj[i]]);
  }

  //두번째 요소 내림차순
  result.sort((a, b) => b[1] - a[1]);

  if (result.length > 1 && result[0][1] === result[1][1]) return -1;

  return Number(answer[0][0]);
}

function solution2(array) {
  /**
     * result: 현재까지 누적된 결과를 나타내는 객체. 
        curr: 현재 순회 중인 배열의 요소
     */

  let objCount = array.reduce((result, curr, idx) => {
    result[curr] = (result[curr] || 0) + 1;
    return result;
  }, {});

  let sortedKeys = Object.keys(objCount).sort(
    (a, b) => objCount[b] - objCount[a]
  );

  if (objCount[sortedKeys[0]] === objCount[sortedKeys[1]]) return -1;
  else return Number(sortedKeys[0]);
}

solution2([1, 2, 3, 3, 3, 4, 5]);
solution2([1, 1, 2, 2]);
solution2([1]);
