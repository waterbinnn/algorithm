/**
 * 문제:
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다.
 * 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 */

const answer = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      arr.push(str[i].toLowerCase());
    } else {
      arr.push(str[i].toUpperCase());
    }
  }
  let ans = arr.join("");
  console.log(ans);
};

answer("aBcDeFg"); //AbCdEfG

/**
 * 다른사람풀이
 * map, 삼항조건식 .. 사용 ... 접수
 */

const answer2 = (str) => {
  console.log(
    [...str]
      .map((x) => (x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase()))
      .join("")
  );
};

answer2("aBcDeFg"); //AbCdEfG
