
var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var found = false;
  var checkChildren = function(tree) {
    _.each(tree.children, function(child) {
      if (child.value === target) {
        found = true;
      } else if (child.children) {
        checkChildren(child);
      }
    });
  }
  checkChildren(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 //addChild = O(1)
 //contains = O(n)
 */
