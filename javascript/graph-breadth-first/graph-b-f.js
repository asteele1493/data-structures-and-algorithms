const Graph = require("../graphs/graphs");

function graphTraversal(graph, start) {
  let traversal = [];
  let visited = [];
  let todo = [start];
  while(todo.length > 0){
    let current = todo.shift();
      if (!visited[current]){
        traversal.push(current);
        visited[current] = true;

      let getNeighbors = graph[current];
      getNeighbors.forEach(n => todo.push(n));
        }
      }

      return traversal;
     }
