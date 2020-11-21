

// Instantiate a new graph
var Graph = function() {
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
  delete this.graphStorage[node];
};

//[1, 2, 3] -> return array[3];
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graphStorage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // let newEdge = {
  //   fromNode: toNode
  // };

  this.graphStorage[fromNode].push(toNode);
  this.graphStorage[toNode].push(fromNode);

  //{3 : [{3 : 2}, {3 : 4}]}

  // Should add a {from : to} object to the fromNode
  // Should add a {to : from} object to the toNode


  // define empty obj

  // {
  //   fromNode: 'this is a node instance',
  //   toNode: 'this is a node instance'
  // }

  // add obj to fromNode's edges array
  // add obj to toNode's edges array
  // return obj?
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


