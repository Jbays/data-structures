var BinarySearchTree = function(value){
  var binarySearchTree = Object.create(binarySearchTreeMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var binarySearchTreeMethods = {

  insert: function(v) {
    var node = BinarySearchTree(v);
    if (v > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(v);
      }
    } else if (v < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(v);
      }
    }
  },

  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  contains: function(v) {
    var doesItContain = false;
    var checkNode = function(node) {
      if (v === node.value) {
        doesItContain = true;
      } else if (v > node.value) {
        if (v === node.right.value) {
          doesItContain = true;
        } else {
          checkNode(node.right.value);
        }
      } else if (v < node.value) {
        if (v === node.left.value) {
          doesItContain = true;
        } else {
          checkNode(node.left.value);
        }
      }
    };
    checkNode(this);
    return doesItContain;
  },


//A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  depthFirstLog: function(cb, node) {
    node = node || this;
    cb(node.value);
    if (node.left) {
      this.depthFirstLog(cb, node.left);
    }
    if (node.right) {
      this.depthFirstLog(cb, node.right);
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
