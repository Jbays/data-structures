

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  if (this.nodes.indexOf(node) > -1) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  var index = this.nodes.indexOf(node);
  if (index > -1) {
    this.nodes.splice(index,1);
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var doesHaveEdge = false;
  _.each(this.edges, function(edge) {
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[0] === toNode && edge[1] === fromNode)) {
      doesHaveEdge = true;
    }
  });
  return doesHaveEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges.push([fromNode, toNode]);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var edgeIndex;
  _.each(this.edges, function(edge, i) {
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[0] === toNode && edge[1] === fromNode)) {
      edgeIndex = i;
    }
  });
  this.edges.splice(edgeIndex,1);
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode ==> O(1)
 contains ==> O(n)
 removeNode ==> O(n)
 addEdge ==> O(n)
 hasEdge ==> O(n)
 removeEdge ==> O(n)
 forEachNode ==> O(n)
 */



