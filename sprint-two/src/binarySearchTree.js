var BinarySearchTree = function(value){
  var binarySearchTree = Object.create(binarySearchTreeMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var binarySearchTreeMethods = {

  insert: function(v) {
    if (v > this.value) {
      if (!this.right) {
        this.right = BinarySearchTree(v);
      } else {
        this.right.insert(v);
      }
    } else if (v < this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(v);
      } else {
        this.left.insert(v);
      }
    }
  },

  contains: function(v) {
    if (v === this.value) {
      return true;
    } else if (v > this.value && this.right) {
      return this.right.contains(v);
    } else if (v < this.value && this.left) {
      return this.left.contains(v);
    }
    return false;
  },

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
 insert: less than O(n) but not quite O(1)
 contains: less than O(n) but not quite O(1)
 depthFirstLog: O(n)
 */
