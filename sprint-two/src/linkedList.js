var LinkedList = function() {
  var list = {};
  list.head = null; // always highest index //
  list.tail = null; // always 0 //

  list.addToTail = function(value) {
    //Adds value to the 0 index of list
    //Shifts all previous values up but 1 index
    //Updates list.head to equal highest index
    if (list.head === null) {
      list.head = 0;
      list.tail = 0;
    }
    // else if (list.head === list.tail) {
    //   list.head = list.head + 1;
    // }
    for (var i = list.head; i >= 0; i--) {
      list[i + 1] = list[i];
    }
    list[list.tail] = Node(value);
    list.head = list.head + 1;
    debugger;
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
