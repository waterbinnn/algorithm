function solution(str_list, ex) {
  console.log(str_list.filter((str) => !str.includes(ex)).join(''));
}

solution(['abc', 'def', 'ghi'], 'ef');
solution(['abc', 'bbc', 'cbc'], 'c');
