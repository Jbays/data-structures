var Queue = function(){
  this.storage = {};
  this.queueSize = 0;
};

Queue.prototype.enqueue = function(value){
  for ( var i = this.queueSize; i > 0; i-- ) {
    this.storage[i] = this.storage[i -1];
  }
  this.storage[0] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  this.queueSize && this.queueSize--;
  var result = this.storage[this.queueSize];
  delete this.storage[this.queueSize];
  return result;
};

Queue.prototype.size = function(){
  return this.queueSize;
};


