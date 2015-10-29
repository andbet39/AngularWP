'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWpApp
 */
angular.module('angularWpApp')
  .controller('MainCtrl', function ($scope,$http,$routeParams ) {

        $scope.page=0;
         var count='9';
        $scope.busy=true;
        var method ='';

        $scope.init= function(){
          var category=$routeParams.category;
          var apiurl='';
            if(category!='all'){
               apiurl='https://www.codetutorial.io/api/get_category_posts/?slug='+category+'&count='+count+'&page='+$scope.page.toString();;
            }else{
               apiurl='https://www.codetutorial.io/api/get_posts/?count='+count+'&page='+$scope.page.toString();
            }

            $http.get(apiurl).then(function (response){

              $scope.posts = response.data.posts;
              $scope.maxpages=response.data.pages;
              $scope.busy=false;

            });
          };

        $scope.init();

     $scope.loadMore = function () {

       if(!$scope.busy){
       var category=$routeParams.category;
       var apiurl='';


        if($scope.page < $scope.maxpages){
             $scope.page +=1;
             $scope.busy=true;

              if(category!='all'){
                apiurl='https://www.codetutorial.io/api/get_category_posts/?slug='+category+'&count='+count+'&page='+$scope.page;
              }else{
                apiurl='https://www.codetutorial.io/api/get_posts/?count='+count+'&page='+$scope.page
              }

             $http.get(apiurl).then(function (response){
              $scope.maxpages=response.data.pages;
             angular.forEach(response.data.posts,function(item) {
               $scope.posts.push(item);
             });
               $scope.busy=false;

           });
        }
       }
     }
  });

