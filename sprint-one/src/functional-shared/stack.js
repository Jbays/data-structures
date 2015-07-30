
//constructor function
var Stack = function() {

  //object being constructed
  var newStack = {
    storage: {},

    //uses "stackSize to avoid conflict with 'size' in stackMethods"
    stackSize: 0
  };

  //adds new methods to constructed object
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {

//various methods to be applied to constructed object
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
