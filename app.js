// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// ROUTES 
angularApp.config(function($routeProvider){
  $routeProvider 

  .when('/', {
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .when('/channels', {
    templateUrl: 'templates/channels.html',
    controller: 'channelsCtrl'
  })

  .when('/cathegories', {
    templateUrl: 'templates/cathegories.html',
    controller: 'cathegoriesCtrl'
  })

  .when('/mostpopular/:number', {
    templateUrl: 'templates/most-popular.html',
    controller: 'mostPopularCtrl'
  });
});



