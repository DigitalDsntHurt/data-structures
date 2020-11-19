//Please note that all my pseudo code in the functional-shared section while trouble shooting some issues with the help desk, notes look very external as a result!

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var currentInstance = {
    queueSize: 0,
    backIndex: 0,
    front: undefined,
    back: {}
  };
  _.extend(currentInstance, queueMethods);
  return currentInstance;
};



var queueMethods = {
  enqueue: function (value) {
    if (this.front === undefined) {
      this.front = value;
    } else {
      this.backIndex += 1;
      this.back[this.backIndex] = value;
    }
    this.queueSize += 1;
  },
  dequeue: function () {
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
  },

  size: function () {
    return this.queueSize;
  }
};