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

        $scope.page=0;
        $scope.busy=true;

        $http.get('https://www.codetutorial.io/api/get_posts/?count=9&page='+$scope.page).then(function (response){

          $scope.posts = response.data.posts;
          console.log(response);
          $scope.maxpages=response.data.pages;
          $scope.busy=false;


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });


     $scope.loadMore = function () {
           if($scope.page < $scope.maxpages){
             $scope.page +=1;
             $scope.busy=true;


             $http.get('https://www.codetutorial.io/api/get_posts/?count=9&page='+$scope.page).then(function (response){

             $scope.maxpages=response.data.pages;
             angular.forEach(response.data.posts,function(item) {
               $scope.posts.push(item);

             });
               $scope.busy=false;

           }, function errorCallback(response) {

           });
        }
     }
  });

