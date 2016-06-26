// CONTROLLERS


angularApp.controller('mainCtrl', ['$scope', '$log', function($scope, $log){
	$scope.main = 'Hello from main';
}]);

angularApp.controller('channelsCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.second = 'Second'; 
  $scope.number = $routeParams.number || 1;  // this would be the default 
}]);

angularApp.controller('mostPopularCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.second = 'Second'; 
  $scope.number = $routeParams.number || 1;  // this would be the default 
}]);

angularApp.controller('cathegoriesCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.cathegories = 'Hello from cathegories'; 
  // $scope.number = $routeParams.number || 1;  // this would be the default 
}]);

