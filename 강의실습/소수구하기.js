//소수 구하기

/**
 * 1. 단순 루프
 * O(n)
 * 성능이 느려서 효율성 테스트를 실패함
 *  */
function isPrime1(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function solution1(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 1) {
    if (isPrime(i)) {
      answer += 1;
    }
  }
  return answer;
}
/**
 * 2. 제곱근 이후 연산하지 않기
 * n의 제곱근 이후는 체크할 필요 없기 때문에 효율적
 * O(sqrt(n))
 *
 * 정확성 테스트는 모두 통과하지만 여전히 효율성 테스트는 통과하지 못함
 *
 */
function isPrime2(num) {
  for (let i = 2; i * i <= num; i += 1) {
    //여기가 다름
    // 이 부분이 변경됩니다.
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

function solution2(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 1) {
    if (isPrime2(i)) {
      answer += 1;
    }
  }

  return answer;
}

/**
 * 3. 에러토스테네스의 체
 * O(n log n log n)
 * 1부터 N까지 모든 소수를 구하는 경우 가장 효율적
 */

function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 1; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean);
}

get_primes(49);
