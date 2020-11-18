var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};

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
  enqueue() {

  },
  dequeue() {
    var lastIndex = size() - 1;
    // var dequeued = this.queue[lastIndex];
    // delete this.queue[lastIndex];
    // return dequeued;
    return lastIndex;
  },
  size() {
    return Object.keys(this).length;
  }
};

var mine = Queue();
console.log(mine);
console.log(mine.size());