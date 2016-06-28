// CONTROLLERS

angularApp.controller('mainCtrl', ['$scope', 'XMLHttpRequest', 'mySelection', function($scope, XMLHttpRequest, mySelection){
	$scope.main = 'Recently Seen';
  $scope.selectedContent = mySelection.selectedContent.length > 0 ? mySelection.selectedContent.length : 'You have not seen anything yet!';
  console.log('main');
}]);

angularApp.controller('categoriesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl){
  $scope.categories = 'Hello from categories'; 
  $scope.contents = getUrl.categories;
}]);

angularApp.controller('choicesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'buildObjArr', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, buildObjArr){
  $scope.choice =  $routeParams.choice;
  $scope.contents = [];
  XMLHttpRequest.request(getUrl.map($scope.choice)).then(function(response){
    buildObjArr.run($scope.contents, response);
  });
}]);

angularApp.controller('channelsCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl){
  $scope.channels = 'Hello from Channels'; 
  $scope.contents = getUrl.channels;
  $scope.channels = true;
  console.log('Channels');
}]);


