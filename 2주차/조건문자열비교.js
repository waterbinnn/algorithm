/**문제
 * 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
 */

/**나는 개 스레기같은 코드를 썼다 ..... */
function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === '>' && eq === '=') {
        answer = n >= m ? 1 : 0;
    } else if (ineq === '<' && eq === '=') {
        answer = n <= m ? 1 : 0;
    } else if (ineq === '<' && eq === '!') {
        answer = n < m ? 1 : 0;
    } else if (ineq === '>' && eq === '!') {
        answer = n > m ? 1 : 0;
    }
    return answer;
}

// 내 코드에서 조금 리팩토링을 해보자면 ..
function solution(ineq, eq, n, m) {
    if (eq === '=' && n === m) return 1;
    if (ineq === '<' && n < m) return 1;
    if (ineq === '>' && n > m) return 1;
    return 0;
}

/** 다른 사람 풀이 */
/** 넘 깔끔하다 .... 재사용성도 좋다 .. 가독성도 굳.. */

// 함수를 객체로 담고..
const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
};

function solution2(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    console.log(op(n, m)); //true 면 1 , false 면 0 출력
    return Number(op(n, m));
}
solution2('>', '=', 45, 30);
