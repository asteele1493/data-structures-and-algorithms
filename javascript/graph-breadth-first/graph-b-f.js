const Graph = require("../graphs/graphs");

graphTraversal(graph, start) {
  const traversal = [];
  const visited = [];
  const todo = new Stack();

  while(todo != null){
    let current = todo.pop();
    //if current is not in visited
    //append current to traversal
    //add current to visited
    //push graph.neighbors of current into todo
    //return traversal
  }
}
