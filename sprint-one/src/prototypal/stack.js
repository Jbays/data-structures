
var Stack = function() {

  //creates new object with prototype stackMethods (and its associated methods)
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;

  return newStack;
  };

var stackMethods = {

  push: function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++
  },

  pop: function(){
    this.stackSize && this.stackSize--;
    var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return result;
  },

  size: function(){
    return this.stackSize;
  }

};



