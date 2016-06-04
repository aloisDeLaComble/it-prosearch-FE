'use strict';

/**
 * @ngdoc overview
 * @name prosearchApp
 * @description
 * # prosearchApp
 *
 * Main module of the application.
 */
angular
  .module('prosearchApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl',
        controllerAs: 'header'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
