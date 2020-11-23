

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let tuple = {};
  tuple[k] = v;
  if (!this._storage.get(index)) {
    insertThing = tuple;
    this._storage.set(index, insertThing);
  }

  if (this._storage.get(index)) {
    let currentBucket = this._storage.get(index);
    if (currentBucket[k]) {
      this._storage.set(index, tuple);
    } else {
      currentBucket[k] = v;
      this._storage.set(index, currentBucket);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  return currentBucket[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  if (currentBucket[k]) { delete currentBucket[k]; }
  this._storage.set(index, currentBucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * * .insert
 * * * O(n)
 *
 * * .retrieve
 * * * O(n)
 *
 * * .remove
 * * * O(n)
 *
 */


