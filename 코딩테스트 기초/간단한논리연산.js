/**
 * x V y => 하나라도 T 면 T
 * x ^ y => 하나라도 F 면 F
 */

function solution(x1, x2, x3, x4) {
  var answer = false;

  const tr = (a, b) => {
    if (!a && !b) {
      return false;
    } else {
      return true;
    }
  };

  answer = tr(x1, x2) && tr(x3, x4) ? true : false;

  return answer;
}

solution(false, true, true, true);

/**
 * 간단한 풀이 ..
 */
function solution2(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
