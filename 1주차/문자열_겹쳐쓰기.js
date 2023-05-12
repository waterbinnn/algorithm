function solution(my_string, overwrite_string, s) {
  const myStr = [...my_string];
  myStr.splice(s, overwrite_string.length, overwrite_string);

  //   console.log(myStr.join("")); //HelloWorld
  return myStr.join("");
}

solution("He11oWor1d", "lloWorl", 2);
