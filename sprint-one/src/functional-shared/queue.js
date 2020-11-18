var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};

  // USE OF _.extend BELOW IS THROWING A ReferenceError: _ is not defined
  // I'M CHOOSING TO IMPLEMENT MY OWN EXTEND RATHER THAN FIGURE OUT WHY UNDERSCORE ISN'T LOADING
  // THIS WAS A COIN TOSS DECISION, I'M SORRY TO SAY
  // _.extend(queue, queueMethods);

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
    // iterate over each item in the queue from back to front
    for (var i = this.size() - 1; i >= 0; i--) {
      // increment each item's index
      this.storage[i + 1] = this.storage[i];
    }
    // add value to queue at index 0
    this.storage[0] = value;
  },
  dequeue() {
    var lastIndex = this.size() - 1;
    var dequeued = this.storage[lastIndex];
    delete this.storage[lastIndex];
    // return dequeued;
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

var mine = Queue();
// console.log(mine);
console.log(mine.size()); // 0
mine.enqueue('harry');
console.log(mine.size()); // 1
mine.dequeue();
console.log(mine.size()); // 0