var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = someInstance.size() - 1; i >= 0; i--) {
      storage[i + 1] = storage[i];
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    var lastIndex = someInstance.size() - 1;
    var lastItem = storage[lastIndex];
    delete storage[lastIndex];
    return lastItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};