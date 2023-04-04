class Node {
  constructor(value) {
    this.value = value;
    }
 }

class Edge {
  constructor(from, to, value) {
    this.from = from;
    this.to = to;
    this.value = value;
   }
 }

 class Graph {
  constructor(directed) {
    this.edges = new Map();
   }

  addNode(value) {
    return new Node(value);
   }

  addEdge(from, to, value) {
    const edge = new Edge(from, to, value);
    const edges = this.edges.get(from) ?? [];
    edges.push(edge);
    this.edges.put(from, edges);

    return edge;
   }

   addUndirectedEdge(a, b, value) {
     this.addEdge(a, b, value);
     this.addEdge(b, a, value);
    }

   getNeighbors(node) {
    if (!node) { return; }
     const edges = this.getEdges(node);
     return edges.map(edge => edge.to);
    }

   getEdges(node) {
     return this.edges.get(node);
    }

 }

 module.exports = Graph;
