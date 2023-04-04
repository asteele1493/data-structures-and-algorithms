# Code Challenge: Graph Implementation

Features:

Implement a graph data structure. The graph should have each one of these methods:

**add node**
- Arguments: value
- Returns: The added node
    -Add a node to the graph
**add edge**
- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing
    -Adds a new edge between two nodes in the graph
    -If specified, assign a weight to the edge
    -Both nodes should already be in the Graph
**get nodes**
- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)
    -Empty collection returned if there are no nodes
**get neighbors**
- Arguments: node
- Returns a collection of edges connected to the given node
    -Include the weight of the connection in the returned collection
    -Empty collection returned if there are no nodes
**size**
- Arguments: none
- Returns the total number of nodes in the graph
    -0 if there are none

## Testing

This implementation should include testing for the following functionality:

- Node can be successfully added to the graph
- An edge can be successfully added to the graph
- A collection of all nodes can be properly retrieved from the graph
- All appropriate neighbors can be retrieved from the graph
- Neighbors are returned with the weight between nodes included
- The proper size is returned, representing the number of nodes in the graph
- A graph with only one node and edge can be properly returned

![Whiteboard](Graph%20CC.png)
