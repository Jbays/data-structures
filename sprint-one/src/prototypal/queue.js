var Queue = function(){

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.queueSize = 0;

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
