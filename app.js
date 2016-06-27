// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// ROUTES 
angularApp.config(function($routeProvider){
  $routeProvider 

  .when('/', {
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })
 
  .when('/categories', {
    templateUrl: 'templates/categories.html',
    controller: 'categoriesCtrl'
  })

  .when('/channels', {
    templateUrl: 'templates/channels.html',
    controller: 'channelsCtrl'
  })


  .when('/mostpopular', {
    templateUrl: 'templates/most-popular.html',
    controller: 'mostPopularCtrl'
  });
});



