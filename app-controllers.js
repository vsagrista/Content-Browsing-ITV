// CONTROLLERS

angularApp.controller('mainCtrl', ['$scope', 'XMLHttpRequest', 'mySelection', function($scope, XMLHttpRequest, mySelection){
	$scope.main = 'Recently Seen';
  $scope.selectedContent = mySelection.selectedContent.length > 0 ? mySelection.selectedContent.length : 'You have not seen anything yet!';
  console.log('main');
}]);

angularApp.controller('categoriesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', function($scope, $routeParams, XMLHttpRequest, mySelection){
  $scope.categories = 'Hello from categories'; 
  $scope.contents = [{
    name: 'Children',
    image: 'http://www.itv.com/entity/d8d99719-589c-4ee0-b858-a7de53b798a8/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'Comedies',
    image: 'http://www.itv.com/entity/2d73f921-48aa-49fd-a033-62b6630eecd5/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'Drama and Soups',
    image: 'http://www.itv.com/entity/f8343179-79d8-4c59-a3d3-59edbbfbf8b4/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'Entertainment',
    image: 'http://www.itv.com/entity/b68785a6-c8e8-4a0e-a806-4f650e32c70a/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'Factual',
    image: 'http://www.itv.com/entity/1fe6d695-25e8-4660-bf5c-66eb4aa2820f/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'Films',
    image: 'http://www.itv.com/entity/5fe53011-24c1-437d-af1f-1e3226a15aaa/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'News',
    image: 'http://www.itv.com/entity/5d82c4f2-c638-45a2-a2fa-9b2fd013d62f/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  },
  {
    name: 'Sport',
    image: 'http://www.itv.com/entity/5770869f-0770-426f-a9a2-6de3f5959242/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'
  }
  ];
  console.log('categories');
}]);


angularApp.controller('choicesCtrl', ['$scope', '$routeParams', 'XMLHttpRequest', 'mySelection', 'getUrl', '$interval', function($scope, $routeParams, XMLHttpRequest, mySelection, getUrl, $interval){
  $scope.choice =  $routeParams.choice;
  $scope.contents = [];
 
  XMLHttpRequest.request(getUrl.map($scope.choice)).then(function(response){
    console.log('data',response)
    $scope.buildObject(response);
  });
  
  $scope.buildObject = function(response){
    response.forEach(
      function(content){
        console.log(content._embedded.programme.title);
        console.log(content._links.image.href);
        $scope.contents.push({
          image: content._links.image.href.slice(7, content._links.image.href.length), // http:// is repeated for some reason,
          name: content._embedded.programme.title
        });
      });
  };
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


