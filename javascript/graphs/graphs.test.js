const Graph = require("./graphs");

decribe("Graph implementation", () => {
  let graph = new Graph();
  test('Node can be successfully added to the graph', () => {
    expect(graph.addNode(7)).toEqual({ "value": 7 })
  });
  test("An edge can be successfully added to the graph", () => {
    graph.addNode(4);
    expect(graph.addEdge(7, 4).toEqual({ "from": 7, "to": 4 }));
  });
  test("A collection of all nodes can be properly retrieved from the graph", () => {

  });
  test("All appropriate neighbors can be retrieved from the graph", () => {

  });
  test("Neighbors are returned with the weight between nodes included", () => {

  });
  test("The proper size is returned, representing the number of nodes in the graph", () => {

  });
  test("A graph with only one node and edge can be properly returned", () => {

  });
});
