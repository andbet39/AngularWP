'use strict';

/**
 * @ngdoc overview
 * @name angularWpApp
 * @description
 * # angularWpApp
 *
 * Main module of the application.
 */
angular
  .module('angularWpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-bind-html-compile',
    'infinite-scroll',
    'hljs'
  ])
.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
})
  .config(function ($routeProvider,$httpProvider) {


  $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.cache = false;

    $routeProvider
      .when('/main/:category', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/viewpost/:postId', {
        templateUrl: 'views/viewpost.html',
        controller: 'ViewpostCtrl',
        controllerAs: 'viewpost'
      })
      .otherwise({
        redirectTo: '/main/all'
      });
  });
