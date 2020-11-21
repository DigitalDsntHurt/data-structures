

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index, v); // old solution

  let tuple = {};
  tuple[k] = v;
  // if bucket @ current index is empty (get()) (_storage.get(index).length > 0)
  // if (this._storage.get(index).length === 0) {
  if (!this._storage.get(index)) {
    // Insert current key and value into the bucket - as either a nested array or an obj
    // this._storage.set(index, []);
    // this._storage.set(index[0], tuple);
    // this._storage.set(index[0], tuple);
    insertThing = [tuple];
    this._storage.set(index, insertThing);
  }

  // if bucket @ current index is not empty
  if (this._storage.get(index).length > 0) {
    insertThing = [tuple];
    this._storage.set(index, insertThing);
    // this._storage.set(index[0][k], v);
    // thingToAppend = this._storage.get(index);
    // this._storage.set(index, thingToAppend.concat(v));
    // // check if key is present (as key or index 0) of any tuple within bucket
    // if (this._storage.get(index[0][k])) {
    //   // if YES
    //   // Retain the key and overwrite the value
    //   this._storage.get(index[0][k]) = v;
    // } else {
    //   // if NO
    //   // create the key with the current value
    // }
  }

  // [        [        [Bob, Barker], [Tom, Delong]              ]   ] _storage[index].length > 0
  // [        [        {Bob: barker, Tom: Delong}                ]   ] _storage[index[0][key]]
  // [        [        {Bob: barker}, {Tom: Delong}              ]   ]

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return this._storage.get(index);
  // this._storage.get(index[0][k]);
  this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


