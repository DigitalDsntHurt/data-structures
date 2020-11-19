class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueSize = 0;
    this.backIndex = 0;
    this.front = undefined;
    this.back = {};
  }
  enqueue(value) {
    if (this.front === undefined) {
      this.front = value;
    } else {
      this.backIndex += 1;
      this.back[this.backIndex] = value;
    }
    this.queueSize += 1;
  }
  dequeue() {
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
  }
  size() {
    return this.queueSize;
  }
}

var CurrentInstance = new Queue();
