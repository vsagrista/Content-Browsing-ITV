angularApp.service('loaderFunctions', function() {
	
	this.showLoader = function() { 
    document.getElementsByClassName('activate')[0].className += ' ' + 'loader';
  };

  this.removeLoader = function() { 
    document.getElementsByClassName('activate')[0].classList.remove('loader');
  };

});
