angularApp.service('mySelection', function() {
  this.selectedContent = [];
  var self = this;
  this.addToSelected = function(content) {
  	self.push(content);
  };
  this.logContent = function(){
  	console.log(self.selectedContent);
  }
});