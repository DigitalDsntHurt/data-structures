var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  let found = false;
  const findValue = function(tree) {
    if (tree.value === target) { found = true; }
    for (var child of tree.children) {
      findValue(child);
    }
    return found;
  };

  return findValue(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * * .addChild
 * * * O(1)
 *
 * * .contains
 * * * O(n)
 *
 */


