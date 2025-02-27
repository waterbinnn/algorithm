function solution(picture, k) {
  let result = [];

  picture.map((v) => {
    const cur = [...v].map((c) => c.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      result.push(cur);
    }
  });
  console.log(result);
  return result;
}

solution(
  [
    '.xx...xx.',
    'x..x.x..x',
    'x...x...x',
    '.x.....x.',
    '..x...x..',
    '...x.x...',
    '....x....',
  ],
  2
);
