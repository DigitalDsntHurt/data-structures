var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var currentKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentKey] = value;
    currentKey += 1;
    count += 1;
  };

  someInstance.dequeue = function() {
    if (currentKey === 0 || count === 0 ) { return undefined; }
    var oldestValue = currentKey;
    _.each(storage, function (value, key) {
      if (Number(key) <= oldestValue) {
        oldestValue = Number(key);
      }
    });
    var result = storage[oldestValue];
    delete storage[oldestValue];
    count -= 1;
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
