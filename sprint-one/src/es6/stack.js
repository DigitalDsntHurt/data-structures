class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var lastIndex = this.size() - 1;
    var lastItem = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return lastItem;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}