var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let newLastIndex = someInstance.keys().length;
    storage[newLastIndex] = value;
  };

  someInstance.pop = function() {
    if (someInstance.size > 0) {
      let lastIndex = someInstance.keys().length - 1;
      delete storage.lastIndex;
    }
  };

  someInstance.size = function() {
    if (someInstance.keys().length === 0) { return 0; }
    return someInstance.keys().length;
  };

  someInstance.keys = function() {
    return Object.keys(storage);
  };

  // someInstance.numericKeys = function() {
  //   return someInstance.keys.map(n => Number.parseInt(n));
  // };

  return someInstance;
};
