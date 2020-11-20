var LinkedList = function() {
  var list = {};
  list.head = null; // always highest index //
  list.tail = null; // always 0 //

  //When values are assigned, they're assigned to the property 0 instead of tail

  list.addToTail = function(value) {
    var newNode = Node(value);

    //this happens if we have no nodes
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

    // if we just removed the last property from list, reset head and tail to null
  };

  list.contains = function(target) {
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
 */