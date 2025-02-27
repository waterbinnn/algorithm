function solution(myString, pat) {
  const newArr = (str) => {
    return str.toUpperCase();
  };

  if (newArr(myString).includes(newArr(pat))) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution("AbCdEfG", "aBc"));

//더 함축한 함수
function solution2(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}
