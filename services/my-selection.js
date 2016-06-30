angularApp.service('mySelection', function() {
  this.selectedContent = [];
  var self = this;
  this.addToSelected = function(name, image) {
  	self.selectedContent.push({
  		name: name,
  		image: image
  	});
  };
});