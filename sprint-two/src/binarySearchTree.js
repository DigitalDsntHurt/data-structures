var BinarySearchTree = function(value) {
  let tree = {};
  tree.value = value;

  tree.left = null;
  tree.right = null;

  tree.insert = function(insertValue) {
    if (insertValue > tree.value) {
      if (tree.right === null) {
        tree.right = BinarySearchTree(insertValue);
      }
      tree.right.insert(insertValue);
    }
    if (insertValue < tree.value) {
      if (tree.left === null) {
        tree.left = BinarySearchTree(insertValue);
      }
      tree.left.insert(insertValue);
    }
  };

  tree.contains = function(searchValue) {
    let found = false;
    if (this.value === searchValue) { found = true; }
    if (this.left !== null) { found = found || this.left.contains(searchValue); }
    if (this.right !== null) { found = found || this.right.contains(searchValue); }
    return found;
  };

  tree.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== null) { this.left.depthFirstLog(cb); }
    if (this.right !== null) { this.right.depthFirstLog(cb); }
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// let mine = BinarySearchTree(5);
// console.log(mine);
// mine.insert(2);
// console.log(mine);
// mine.insert(3);
// console.log(mine);