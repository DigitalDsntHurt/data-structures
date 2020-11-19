var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[currentKey] = value;
    currentKey += 1;
  };

  someInstance.pop = function() {
    if (currentKey === 0) { return undefined; }
    var result = storage[currentKey - 1];
    delete storage[currentKey];
    currentKey -= 1;
    return result;
  };

  someInstance.size = function() {
    return currentKey;
  };

  return someInstance;
};
