const solution = (money) => {
  const americano = 5500;

  let [count, left] = [0, 0];

  count = Math.floor(money / americano);
  left = money - americano * count;

  console.log([count, left]);
  return [count, left];
};

function solution2(money) {
  return [Math.floor(money / 5500), money % 5500];
}

solution(5500);
solution(15000);
solution(7000);
