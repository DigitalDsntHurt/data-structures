//Please note that all my pseudo code in the functional-shared section while trouble shooting some issues with the help desk, notes look very external as a result!

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var currentInstance = {currentKey: 0, storage: {}};
  _.extend(currentInstance, stackMethods);
  return currentInstance;
};

var stackMethods = {
  push: function(value) {
    this.currentKey += 1;
    this.storage[this.currentKey] = value;
  },
  pop: function() {
    if (this.currentKey === 0) { return undefined; }
    var result = this.storage[this.currentKey];
    delete this.storage[this.currentKey];
    this.currentKey -= 1;
    return result;
  },
  size: function() {
    return this.currentKey;
  }
};


