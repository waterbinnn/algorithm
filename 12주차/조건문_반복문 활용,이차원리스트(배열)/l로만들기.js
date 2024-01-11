function solution(myString) {
  console.log([...myString].map((v) => (v < 'l' ? 'l' : v)).join(''));
}
const solution2 =
  //다른 풀이
  (myString) => myString.replace(/[a-k]/g, 'l');

solution('abcdevwxyz');
