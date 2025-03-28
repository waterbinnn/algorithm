/**
 * BFS 너비우선탐색
 * DFS 깊이우선탐색
 */

/**
 * @문제 설명
 * n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
 * 
 * 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
 * 
 * @제한사항
 * 노드의 개수 n은 2 이상 20,000 이하입니다.
 * 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
 * vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
 
* @example
 * n	vertex	return
 * 6	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	3
 */

// 노드, 간선, 최단경로 -> 그래프 문제
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
  //1. 그래프를 만들어줘야 한다.
  const graph = Array.from(Array(n + 1), () => []); //인접 리스트

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  //BFS
  const queue = [1];
  while (queue.length > 0) {
    const src = queue.shift(); //shift는 O(n)이어서 성능이 안좋음. 하지만 요소가 적응 경우에는 JS엔진에서 최적화해줌

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);

//직접 Queue를 만들어서 하는 방법
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

function solution2(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  //BFS
  const queue = new Queue();
  queue.enqueue(1);

  while (!queue.isEmpty) {
    const src = queue.dequeue();

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}
