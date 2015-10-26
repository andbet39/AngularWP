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
    'ngMaterial',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-bind-html-compile',
    'hljs'
  ])
.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
}) .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  })
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  })

  .config(function ($routeProvider,$httpProvider) {


  $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.cache = false;

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
      .when('/viewpost/:postId', {
        templateUrl: 'views/viewpost.html',
        controller: 'ViewpostCtrl',
        controllerAs: 'viewpost'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
