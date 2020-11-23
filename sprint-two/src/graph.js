// Instantiate a new graph
let Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

Graph.prototype.contains = function(node) {
  if (this[node]) { return true; }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let edge of this[node]) {
    this.removeEdge(node, edge);
  }
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let from = this[fromNode];
  let to = this[toNode];
  let fromNodeStartIndex = from.indexOf(toNode);
  let toNodeStartIndex = to.indexOf(fromNode);
  from.splice(fromNodeStartIndex, 1);
  to.splice(toNodeStartIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this) {
    if (Array.isArray(this[node])) { cb(node); }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * * .addNode
 * * * O(1)
 *
 * * .contains
 * * * O(1)
 *
 * * .removeNode
 * * * O(n**2)
 *
 * * .hasEdge
 * * * O(1)
 *
 * * .addEdge
 * * * O(1)
 *
 * * .removeEdge
 * * * O(n)
 *
 * * .forEachNode
 * * * O(n)
 *
 */