

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = [];
};

Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.nodes[fromNode], toNode) && _.contains(this.nodes[toNode], fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.nodes[fromNode] = _.filter(this.nodes[fromNode], function(edge) {return edge !== toNode;});
  this.nodes[toNode] = _.filter(this.nodes[toNode], function(edge) {return edge !== fromNode;});
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(edges, node){
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



