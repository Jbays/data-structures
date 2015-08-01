var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = LimitedArray(this._limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  var i = getIndexBelowMaxForKey(item, this._limit);
  this._storage.set(i, item);
};

setPrototype.contains = function(item){
  var i = getIndexBelowMaxForKey(item, this._limit);
  return !!this._storage.get(i);
};

setPrototype.remove = function(item){
  var i = getIndexBelowMaxForKey(item, this._limit);
  this._storage.set(i, null);
};

/*
 * Complexity: What is the time complexity of the above functions?
add O(1)
contains O(1)
remove O(1)
 */
