'use strict';

angular.module('angularWpApp')
  .controller('NavbarCtrl', function ($scope,wp) {

    wp.getCategories().then(function (response){
      $scope.categories=response.data.categories;
    });


  });
