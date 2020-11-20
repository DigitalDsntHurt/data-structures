var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  //use this

  // search every child for target
  // if no target return false

  /*
  // create function called containsValue
    // if this.value === target
      // return true -- we win
    // else
      // this.children.length > 1
          // iterate over this.childen
            // make recurisive call on current child
*/
  // return false;
  if (this.value === target) { return true; }
  if (this.children.length === 0) { return false; }
  _.each(this.children, function (child, key, obj) {
    if (child.value === target) { return true; }
    return child.contains(target);
  });
  debugger;
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
