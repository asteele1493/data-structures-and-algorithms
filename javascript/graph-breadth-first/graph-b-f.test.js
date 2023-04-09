const Graph = require("../graphs/graphs");
const graphTraversal = require("./graph-b-f");

test('bf traversal implementation of Sneaky Snacker graph', () => {
  const graph = new Graph();
  const kidsroom = graph.addNode();
  const bathroom = graph.addNode();
  const parentsroom = graph.addNode();
  const hallway = graph.addNode();
  const garage = graph.addNode();
  const livingroom = graph.addNode();
  const kitchen = graph.addNode();

  graph.addUndirectedEdge(kidsroom, bathroom);
  graph.addUndirectedEdge(kidsroom, hallway);
  graph.addUndirectedEdge(bathroom, parentsroom);
  graph.addUndirectedEdge(bathroom, hallway);
  graph.addUndirectedEdge(parentsroom, hallway);
  graph.addUndirectedEdge(hallway, garage);
  graph.addUndirectedEdge(hallway, livingroom);
  graph.addUndirectedEdge(hallway, kitchen);
  graph.addUndirectedEdge(livingroom, kitchen);

  const traversal = graph.graphTraversal(kidsroom);

  expect(traversal).toEqual([ kidsroom, bathroom, hallway, parentsroom, garage, livingroom, kitchen]);
});
