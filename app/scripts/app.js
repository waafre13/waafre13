'use strict';

/**
 * @ngdoc overview
 * @name lierKommuneApp
 * @description
 * # lierKommuneApp
 *
 * Main module of the application.
 */
angular
  .module('lierKommuneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tjeneste', {
        templateUrl: 'views/tjeneste.html',
        controller: 'TjenesteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
