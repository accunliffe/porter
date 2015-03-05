'use strict';


// Declare app level module which depends on filters, and services
angular.module('port', ['ngRoute', 'ngAnimate', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/partial1', controller: MyCtrl1});
    $routeProvider.when('/about', {templateUrl: 'partials/partial2', controller: MyCtrl2});
    $routeProvider.when('/view3', {templateUrl: 'partials/partial3', controller: MyCtrl3});
    $routeProvider.when('/view4', {templateUrl: 'partials/partial4', controller: MyCtrl4});
    $routeProvider.when('myModalContent', {templateUrl: 'partials/myModalContent', controller: ModalCtrl})
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);  
  }]);