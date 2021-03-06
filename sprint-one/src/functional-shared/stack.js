var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  // extend(stack, stackMethods);
  _.extend(stack, stackMethods); //=> what i think it should be with underscore
  return stack;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push(value) {
    this.storage[this.size()] = value;
  },
  pop() {
    var lastIndex = this.size() - 1;
    var lastItem = this.storage[lastIndex];
    delete this.storage[lastIndex];
    debugger;
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
