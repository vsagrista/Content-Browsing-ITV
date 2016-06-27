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
  
  .when('/categories/content/:choice', {
    templateUrl: 'templates/choices.html',
    controller: 'choicesCtrl'
  })


  .when('/channels', {
    templateUrl: 'templates/channels.html',
    controller: 'channelsCtrl'
  });
  
});



