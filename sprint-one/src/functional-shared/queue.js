var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  extend(queue, queueMethods);
  return queue;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {
  enqueue(value) {
    for (var i = this.size() - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
  },
  dequeue() {
    var lastIndex = this.size() - 1;
    var dequeued = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};