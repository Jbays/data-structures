var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   //object being constructed
  var newQueue = {
    storage: {},

    //uses "stackSize to avoid conflict with 'size' in stackMethods"
    queueSize: 0
  };

  //adds new methods to constructed object
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {

  enqueue: function(value){
    for ( var i = this.queueSize; i > 0; i-- ) {
      this.storage[i] = this.storage[i -1];
    }
    this.storage[0] = value;
    this.queueSize++;
  },

  dequeue: function(){
    this.queueSize && this.queueSize--;
    var result = this.storage[this.queueSize];
    delete this.storage[this.queueSize];
    return result;
  },

  size: function(){
    return this.queueSize;
  }

};
