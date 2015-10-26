'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWpApp
 */
angular.module('angularWpApp')
  .controller('MainCtrl', function ($scope,$http) {

        $http.get('https://www.codetutorial.io/api/get_posts/?count=9').then(function (response){

          $scope.posts = response.data.posts;
          console.log(response);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  });
