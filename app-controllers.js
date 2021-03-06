// CONTROLLERS

angularApp.controller('mainCtrl', ['$scope', 'XMLHttpRequest', 'mySelection', function($scope, XMLHttpRequest, mySelection){
  $scope.main = 'Recently Seen';
  $scope.contents = mySelection.selectedContent;
  $scope.nothingSelected = mySelection.selectedContent.length > 0 ? '' : 'You have not seen anything yet!';
}]);

angularApp.controller('categoriesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'loaderFunctions', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, loaderFunctions){
  $scope.categories = 'Choose a category'; 
  $scope.contents = getUrl.categories;
  $scope.contentsRendered = function(){
    loaderFunctions.removeLoader();
  };
  loaderFunctions.showLoader();
}]);

angularApp.controller('choicesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'buildObjArr', 'loaderFunctions', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, buildObjArr, loaderFunctions){
  $scope.choice =  $routeParams.choice;
  $scope.contents = [];
  XMLHttpRequest.request(getUrl.map($scope.choice)).then(function(response){
    buildObjArr.run($scope.contents, response);
  });
  $scope.contentsRendered = function(){
    loaderFunctions.removeLoader();
  };
  loaderFunctions.showLoader();
}]);

angularApp.controller('episodesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'buildObjArr', 'loaderFunctions', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, buildObjArr, loaderFunctions){
  $scope.episode =  $routeParams.episode;
  $scope.choice = $routeParams.choice;
  $scope.contents = [];

  $scope.saveInMySelection = function(name, image){
    mySelection.addToSelected(name,image);
  };

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
 
  $scope.prepareContents = function() {
    for(var i = 0; i < 9; i++) $scope.contents.push({ 
      image: getUrl.getImageUrl($scope.choice),
      name: $scope.episode.capitalize() + ': episode '+ (i+1)
    });
  }; 

  $scope.contentsRendered = function(){
    loaderFunctions.removeLoader();
  };

  $scope.prepareContents();
  loaderFunctions.showLoader();
}]);


angularApp.controller('playerCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', 'buildObjArr', '$sce', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, buildObjArr, $sce){
  $scope.player = 'Playing ' + $scope.content;
  $scope.videoUrl = $sce.trustAsResourceUrl('https://player.vimeo.com/video/50872925?autoplay=1');
  $scope.content = $routeParams.content;
}]);

angularApp.controller('channelsCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl){
  $scope.saveInMySelection = function(name, image){
    mySelection.addToSelected(name,image);
  };
  $scope.channels = 'Channels'; 
  $scope.contents = getUrl.channels;
}]);


