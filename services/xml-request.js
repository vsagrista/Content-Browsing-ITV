angularApp.service('XMLHttpRequest', function($http) {
  this.run = function() {
  	console.log('hello');
  }; 
  this.request = function(url) {
	  $http.get(url, { 
  	  headers: {
  	  	Accept : 'application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8'
      }
	  })
	  .success(function(data){
	  	console.log(data._embedded.productions);
	  	return true
	  })
	  .error(function(data){
	  	console.log(data);
	  });	
  };
  
});