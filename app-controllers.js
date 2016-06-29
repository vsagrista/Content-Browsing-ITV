// CONTROLLERS

angularApp.controller('mainCtrl', ['$scope', 'XMLHttpRequest', 'mySelection', function($scope, XMLHttpRequest, mySelection){
	$scope.main = 'Recently Seen';
  $scope.selectedContent = mySelection.selectedContent.length > 0 ? mySelection.selectedContent.length : 'You have not seen anything yet!';
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

angularApp.controller('episodesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'buildObjArr', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, buildObjArr){
  $scope.episode =  $routeParams.episode;
  $scope.choice = $routeParams.choice;
  $scope.contents = [];
  for(var i = 0; i < 9; i++) $scope.contents.push({ 
    image: getUrl.getImageUrl($scope.choice),
    name: $scope.episode + ': episode '+ i
  });
}]);

angularApp.controller('playerCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'buildObjArr', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, buildObjArr){
  $scope.player = 'Player';
  $scope.content = $routeParams.content;
}]);


angularApp.controller('channelsCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl){
  $scope.channels = 'Channels'; 
  $scope.contents = getUrl.channels;
  console.log('Channels');
}]);


