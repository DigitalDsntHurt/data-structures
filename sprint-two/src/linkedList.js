var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.head && list.tail) {
      list.tail = newNode;
      list.head.next = newNode;
    }
  };

  list.removeHead = function() {
    var removedNode = list.head;
    if (!list.head.next) {
      list.head = null;
      list.tail = null;
    }
    list.head = list.head.next;
    return removedNode.value;
  };

  list.contains = function(target) {
    var listContains = function (node) {
      if (target === node.value) { return true; }
      if (!node.next) { return false; }
      return listContains(node.next);
    };
    return listContains(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * * .addToTail
 * * * O(1)
 *
 * * .removeHead
 * * * O(1)
 *
 * * .contains
 * * * O(n)
 *
 */