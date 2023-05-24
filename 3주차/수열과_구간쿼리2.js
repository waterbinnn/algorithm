/**
 * query = [s e k] 꼴
 * s <= arr[i] <= e &&  k < arr[i]가 가장 작은 값
 * 이미 찾은 값은 나가리
 *
 *
 */

function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const result = arr.slice(s, e + 1).filter((num) => num > k);
    // arr.slice(s, e + 1)은 시작 인덱스 s부터 종료 인덱스 e까지의 요소를 추출하는 것
    //k 보다 큰 요소만 필터링 해서 result 에 저장
    return result.length > 0 ? Math.min(...result) : -1;
    // result 에 값이 있을 경우 result 에서 가장 작은 값 출력, 없을 경우 -1
  });
}

function solution2(arr, queries) {
  var answer = [];
  for (let [s, e, k] of queries) {
    //v->요소값, i-> 순회하는 인덱스
    //작은것부터 나열해준다음 제일 작은 0번쨰 인덱스를 temp에 넣어줌
    let temp = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    //temp가 존재하면 temp값을 없으면 -1값을 answer에 넣어준다.
    answer.push(temp ? temp : -1);
  }

  return answer;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);
