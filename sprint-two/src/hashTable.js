var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//we need to learn how to make buckets

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //bucket assignment ==> storage[index] OR empty array
  var bucket = this._storage.get(i) || [];

  //Into bucket, push both key and value arguments
  //Why?
  //if there's more than one item in the bucket,
  //given its key, we can fetch the value
  bucket.push([k,v]);

  //sets bucket at the storage[index]
  this._storage.set(i,bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //bucket assignment ==> storage[index]
  var bucket = this._storage.get(i);

  //iterating over the length of the bucket
  for (var j = 0; j < bucket.length; j++) {

    //checks each array in the bucket
    //comparing first element to the key we want to retrieve
    if (bucket[j][0] === k) {

      //returns value to the corresponding key
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //bucket assignment
  var bucket = this._storage.get(i);

  //iterates over length of bucket
  for (var j = 0; j < bucket.length; j++) {

    //checks each array in the bucket
    //comparing first element to the key we want to retrieve
    if (bucket[j][0] === k) {

      //sets corresponding value to null
      bucket[j][1] = null;

      //sets bucket back into storage[index]
      this._storage.set(i,bucket);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 hashtable Insert ==> O(1)
 hashtable Retrieve ==> O(1) (As long as we hold the bucket size constant)
 hashtable Remove ==> O(1)
 */
