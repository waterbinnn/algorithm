/**
 * @문제
 * 포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서 다음 입력 때 활용하고 싶어 졌다.
 * 예를 들어, go 가 한 번 입력되었다면, 다음 사용자는 g 만 입력해도 go를 추천해주므로 o를 입력할 필요가 없어진다!
 * 단, 학습에 사용된 단어들 중 앞부분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.
 * 효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는지 궁금해졌다.
 *
 * 예를 들어, 학습된 단어들이 아래와 같을 때
 * go
 * gone
 * guild
 * go를 찾을 때 go를 모두 입력해야 한다.
 * gone을 찾을 때 gon 까지 입력해야 한다. (gon이 입력되기 전까지는 go 인지 gone인지 확신할 수 없다.)
 * guild를 찾을 때는 gu 까지만 입력하면 guild가 완성된다.
 * 이 경우 총 입력해야 할 문자의 수는 7이다.
 *
 * 라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.
 *
 * @example
 * words  | result
 * ["go","gone","guild"] | 7
 * ["abc","def","ghi","jklm"] | 4
 * ["word","war","warrior","world"] | 15
 */

function makeTrie(words) {
  const root = {}; //루트노드를 설정할 변수

  for (const word of words) {
    //Trie를 구성하기 위한 루프
    let current = root; //루프부터 시작

    for (const letter of word) {
      // 단어의 글자를 하나씩 추출한 후
      // 값을 넣는다.
      if (!current[letter]) {
        // 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.
        current[letter] = [0, {}];
      }
      current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅을 위해 1 더해준다.
      current = current[letter][1]; // current는 letter에 해당되는 노드로 이동한다.
    }
  }
  return root;
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); //Trie 자료구조 만들기

  for (const word of words) {
    //입력받은 수 만큼 루프
    let count = 0; //카운팅을 위한 변수
    let current = trie; //루트부터 시작

    for (const [_, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        //단어가 하나 이하로 남을 경우 종료
        break;
      }
      current = current[letter][1]; //다음 노드로 이동
    }
    answer += count; //카운팅
  }
  return answer;
}

solution(['go', 'gone', 'guild']);
