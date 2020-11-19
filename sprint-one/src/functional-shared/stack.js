var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  extend(stack, stackMethods);
  return stack;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push(value) {
    for (var i = this.size() - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
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

var mine = Stack();
console.log(mine.size()); // 0
mine.push('dudeman');
console.log(mine.size()); // 1
mine.push('ladygal');
console.log(mine.size()); // 2
console.log(mine.pop()); // ladygal
console.log(mine.size()); // 1
