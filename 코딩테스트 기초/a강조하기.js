function solution(myString) {
  let arr = [...myString];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      answer.push(arr[i].toUpperCase());
    } else if (arr[i] === arr[i].toUpperCase() && arr[i] !== "A") {
      answer.push(arr[i].toLowerCase());
    } else {
      answer.push(arr[i]);
    }
  }
  return answer.join("");
}

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));

const solution2 = (s) => s.toLowerCase().replaceAll("a", "A");
//replaceAll 로 다 lowerCase -> a 만 A 로
console.log(solution3("PrOgRaMmErS"));
