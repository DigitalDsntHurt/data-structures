// Instantiate a new graph
let Graph = function() {
  this.graphStorage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphStorage[node] = [];
};

Graph.prototype.contains = function(node) {
  if (this.graphStorage[node]) { return true; }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let edge of this.graphStorage[node]) {
    this.removeEdge(node, edge);
  }
  delete this.graphStorage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graphStorage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphStorage[fromNode].push(toNode);
  this.graphStorage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let frmnode = this.graphStorage[fromNode];
  let tonode = this.graphStorage[toNode];
  let fromNodeStartIndex = frmnode.indexOf(toNode);
  let toNodeStartIndex = tonode.indexOf(fromNode);
  frmnode.splice(fromNodeStartIndex, 1);
  tonode.splice(toNodeStartIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.graphStorage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// let mine = new Graph();
// console.log(mine);