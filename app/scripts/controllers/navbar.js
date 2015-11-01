'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angularWpApp
 */
angular.module('angularWpApp')
  .controller('NavbarCtrl', function ($scope,wp) {

    wp.getCategories().then(function (response){
      $scope.categories=response.data.categories;
    });


  });
