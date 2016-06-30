angularApp.service('mySelection', function() {
  this.selectedContent = [];
  var self = this;
  this.addToSelected = function(name, image) {
  	self.selectedContent.push({
  		name: name,
  		image: image
  	});
  };
  this.logContent = function(){
  	console.log(self.selectedContent);
  };
});