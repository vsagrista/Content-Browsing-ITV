// CONTROLLERS

angularApp.controller('mainCtrl', ['$scope', 'XMLHttpRequest', 'mySelection', function($scope, XMLHttpRequest, mySelection){
	$scope.main = 'Recently Seen';
  $scope.selectedContent = mySelection.selectedContent.length > 0 ? mySelection.selectedContent.length : 'Nothing selected yet';
  console.log('main');
}]);

angularApp.controller('categoriesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', function($scope, $routeParams, XMLHttpRequest, mySelection){
  $scope.categories = 'Hello from categories'; 
  $scope.url = 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/categories?broadcaster=ITV';
  console.log('categories');
}]);

angularApp.controller('channelsCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', function($scope, $routeParams, XMLHttpRequest, mySelection){
  $scope.channels = 'Hello from Channels'; 
  $scope.url = 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV';
  $scope.number = $routeParams.number || 1;  // this would be the default 
  console.log('Channels');
}]);

angularApp.controller('mostPopularCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', function($scope, $routeParams, XMLHttpRequest, mySelection){
  $scope.popular = 'Hello from popular'; 
  $scope.url = 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV';
  XMLHttpRequest.request($scope.url);
}]);


// Popular:

// .program Title
// .channel
// .duration
// .links.image
// .links.allEpisodes // this should lead to another ajax call


