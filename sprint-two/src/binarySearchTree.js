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
    let isPresent = false;
    const findValue = function() {
      /**
       * if searchValue = current tree's value
       *   isPresent = true
       * if searchValue > current tree's value
       *   tree.right.findValue(searchValue)
       * if searchValue < current tree's value
       *   tree.left.findValue(searchValue)
       */

      if (searchValue = this.value) { isPresent = true; }
      if (searchValue > this.value) { this.right.findValue(searchValue); }
      if (searchValue < this.value) { this.left.findValue(searchValue); }

    };
    findValue(searchValue);
    return isPresent;
  };
  tree.depthFirstLog = function() {};
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
let mine = BinarySearchTree(5);
console.log(mine);
mine.insert(2);
console.log(mine);
mine.insert(3);
console.log(mine);