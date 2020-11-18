var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var newLastIndex = someInstance.keys().length;
    storage[newLastIndex] = value;
  };

  someInstance.pop = function() {
    var lastIndex = someInstance.size() - 1;
    var deletedValue = storage[lastIndex];
    delete storage[lastIndex];
    return deletedValue;
  };

  someInstance.size = function() {
    if (someInstance.keys().length === 0) { return 0; }
    return someInstance.keys().length;
  };

  someInstance.keys = function() {
    return Object.keys(storage);
  };

  return someInstance;
};