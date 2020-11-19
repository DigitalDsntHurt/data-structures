class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.currentKey = 0;
    this.storage = {};
  }

  push(value) {
    this.currentKey += 1;
    this.storage[this.currentKey] = value;
  }

  pop() {
    if (this.currentKey === 0) { return undefined; }
    var result = this.storage[this.currentKey];
    delete this.storage[this.currentKey];
    this.currentKey -= 1;
    return result;
  }

  size() {
    return this.currentKey;
  }

}

var CurrentInstance = new Stack;