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
