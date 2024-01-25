/**
 * 피자 6조각 한명씩 모두
 **/

function solution(n) {
  let box = 6;
  while (box % n !== 0) {
    box += 6;
  }
  console.log(box / 6);
  return box / 6;
}

solution(6);
solution(10);
solution(4);
