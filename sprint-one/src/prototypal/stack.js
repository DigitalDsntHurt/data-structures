var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  push(value) {
    this.storage[this.size()] = value;
  },
  pop() {
    var lastIndex = this.size() - 1;
    var lastItem = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return lastItem;
  },
  size() {
    return Object.keys(this.storage).length;
  }
};


