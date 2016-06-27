angularApp.service('XMLHttpRequest', function($http) {
  this.run = function() {
  	console.log('hello');
  }; 
  this.request = function(url) {
	  return $http.get(url, { 
  	  headers: {
  	  	Accept : 'application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8'
      }
	  }).then(function(response){
	  	return response.data._embedded.productions;
	  });
	  // .success(function(data){

	  // 	return data
	  // })
	  // .error(function(data){
	  // 	console.log(data);
	  // });	
  };
});