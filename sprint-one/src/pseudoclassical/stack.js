var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentKey = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.currentKey += 1;
  this.storage[this.currentKey] = value;
};

Stack.prototype.pop = function () {
  if (this.currentKey === 0) { return undefined; }
  var result = this.storage[this.currentKey];
  delete this.storage[this.currentKey];
  this.currentKey -= 1;
  return result;
};

Stack.prototype.size = function () {
  return this.currentKey;
};

var CurrentInstance = new Stack();

