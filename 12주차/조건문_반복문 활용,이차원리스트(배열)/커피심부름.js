/**
 * americano 4500
 * latte 5000
 *
 * anything = americano
 */

function solution(order) {
  console.log(
    order
      .map((v) => (v.includes('latte') ? 5000 : 4500))
      .reduce((acc, cur) => acc + cur)
  );
}

solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything']);
