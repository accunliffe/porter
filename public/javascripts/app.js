'use strict';


// Declare app level module which depends on filters, and services
angular.module('port', ['ngRoute', 'ngAnimate', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home', controller: MyCtrl1});
    $routeProvider.when('/about', {templateUrl: 'partials/about', controller: MyCtrl2});
    $routeProvider.when('/lendeavor', {templateUrl: 'partials/lendeavor', controller: MyCtrl3});
    $routeProvider.when('/randmcnally', {templateUrl: 'partials/randmcnally', controller: MyCtrl4});
    $routeProvider.when('/stockickr', {templateUrl: 'partials/stockickr', controller: MyCtrl5});
    $routeProvider.when('/truespirit', {templateUrl: 'partials/truespirit', controller: MyCtrl6});
    $routeProvider.when('/lendy', {templateUrl: 'partials/lendy', controller: MyCtrl7});
    $routeProvider.when('myModalContent', {templateUrl: 'partials/myModalContent', controller: ModalCtrl})
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);  
  }]);