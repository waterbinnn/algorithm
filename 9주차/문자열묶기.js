/**
 * 같은 길이의 문자 새 배열로 묶고 가장 긴 길이 출력하기
 * map을 돌려서 길이가 같은것끼리 묶고 길이 비교
 */

function solution(strArr) {
  const countMap = strArr.reduce((counts, str) => {
    const len = str.length;

    counts[len] = (counts[len] || 0) + 1;

    console.log(counts);
    return counts;
  }, {});

  console.log(Math.max(...Object.values(countMap)));

  return Math.max(...Object.values(countMap));
}

solution(["a", "bc", "d", "efg", "hi"]);
