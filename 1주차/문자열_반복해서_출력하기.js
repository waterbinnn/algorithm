/**
 * 
 문자열 str과 정수 n이 주어집니다.
 str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 */

const answer = (str, n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(str);
  }
  console.log(arr.join(""));
};

answer("string", 5); //stringstringstringstringstring

/**
 * 나랑 비슷한 풀이인데 이제 더 효율적인..
 */

const answer2 = (str, n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += str;
  }
  console.log(string);
};

answer2("string", 5); //stringstringstringstringstring

/**
 * 다른 사람 풀이
 * : repeat 함수를 간과했다 ....
 */

const answer3 = (str, n) => {
  console.log(str.repeat(n));
};

answer3("string", 5); //stringstringstringstringstring
