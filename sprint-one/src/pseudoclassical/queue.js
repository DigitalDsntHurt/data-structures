var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.backIndex = 0;
  this.front = undefined;
  this.back = {};
};

Queue.prototype.enqueue = function (value) {
  if (this.front === undefined) {
    this.front = value;
  } else {
    this.backIndex += 1;
    this.back[this.backIndex] = value;
  }
  this.queueSize += 1;
};

Queue.prototype.dequeue = function () {
  var result = this.front;
  if (this.front === undefined) { return undefined; }
  if (this.queueSize === 1) {
    delete this.front;
  } else {
    this.front = this.back[this.backIndex];
    delete this.back[this.backIndex];
  }
  this.queueSize -= 1;
  return result;
};

Queue.prototype.size = function () {
  return this.queueSize;
};

var CurrentInstance = new Queue();


