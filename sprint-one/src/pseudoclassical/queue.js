var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.size() - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
};

Queue.prototype.dequeue = function() {
  var lastIndex = this.size() - 1;
  var lastItem = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return lastItem;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
