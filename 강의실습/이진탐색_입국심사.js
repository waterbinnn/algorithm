/**
이진탐색 binarySearch
- 반드시 정렬이 되어있어야 사용 가능 
- 배열 또는 이진 트리를 이용하여 구현 
- O (log n)시간 복잡도인 만큼 상당히 빠름
*/

/**
 * @문제
 * n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.
 * 처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다.
 * 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.
 *
 * 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.
 *
 * 입국심사를 기다리는 사람 수 n,
 * 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때,
 * 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 *
 * @제한사항
 * 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
 * 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
 * 심사관은 1명 이상 100,000명 이하입니다.
 *
 * @example
 * n	times	return
 * 6	[7, 10]	28
 */

//10억명이면 무조건 로그 시간을 써야 함 -> 이진탐색
//특정 값을 찾는게 아님. 최소 몇 분에 모든 심사가 끝나는가? 를 찾는 것
// -> 결정 문제 = 이진 탐색 = 파라메트릭 서치 (Parametric search)

//최소 1분에서 10억분 * n 사이
//심사관들이 몇 명을 처리하는가?
//처리 가능한 입국자 n보다 작다면, 분을 올려야 하고, 입국자가 n보다 크다면 분을 낮춰야 함
//심사관이 시간대비 몇 명을 처리할 수 있는가?
//시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); // 이진탐색을 위해 솔팅해야 함 O(n log n)
  let left = 1; //최소 시간
  let right = sortedTimes[sortedTimes.length - 1] * n; //가장 심사가 오래 걸리는 심시관이 모두 전담한다면 최대 시간

  //이진 탐색
  while (left <= right) {
    //이진 탐색은 **중간값이 구하려는 값이 맞는지 확인**하는 것임으로 중간값이 총 시간이 된다.
    const mid = Math.floor((left + right) / 2);
    // 그 총 시간을 심사시간으로 나눈 값이 한 심사관이 시간내에 심사 가능한 수
    // 그 수를 다 더해주면 총 심사 가능 인원수가 나옴
    // 입국자 수 = 시간/심사시간 , 이걸 다 더해야 한다. 심사관들이 각각 몇명을 처리할 수 있는지를 계산
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    if (sum < n) {
      //입국 심사를 기다리는 사람의 수(n)보다 입국자 수(sum)가 작을 경우 , 시간을 늘려야 한다.
      left = mid + 1;
    } else {
      //입국 심사를 기다리는 사람의 수(n)보다 입국자 수(sum)가 클 경우, 시간을 줄여야 한다
      right = mid - 1;
    }
    //left 가 right 을 넘어서는 순간이 온다.
  }
  //역전되기 진전 값을 반환하면 된다.
  console.log(left);
  return left;
}

solution(6, [7, 10]);
