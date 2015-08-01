var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//we need to learn how to make buckets

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  bucket.push([k,v]);
  this._storage.set(i,bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(item) {
    if (item[0] === k) {
      return item[1];
    }
  });
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  _.each(bucket, function(item) {
    if (item[0] === k) {
      this._storage.set(i,[k,null]);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
