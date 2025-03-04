/**
 * @description
 * 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 *
 * @example
 * ".... . .-.. .-.. ---"	"hello"
 * ".--. -.-- - .... --- -."	"python"
 */

const morse = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
};

function solution(letter) {
  console.log(
    letter
      .split(' ')
      .map((v) => morse[v])
      .join('')
  );
}

function solution2(letter) {
  console.log(letter.split(' ').reduce((prev, curr) => prev + morse[curr], ''));
}

solution('.... . .-.. .-.. ---'); //hello
solution2('.--. -.-- - .... --- -.'); //python
