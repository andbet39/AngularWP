'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '<ins class="ad-div adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-7296294573929906" data-ad-slot="9951268670"></ins></ins>';

var API_URL = 'http://angular.codetutorial.io:3000'

angular.module('angularWpApp')
  .controller('MainCtrl', function ($scope,$routeParams,wp ) {

        $scope.page=0;
        $scope.busy=true;
        var count='10';
        var insertAds=true;

        $scope.init= function(){
          var category='all';

          if($routeParams.category){
            category=$routeParams.category;
          }
            wp.getPosts(count,$scope.page,category).then(function (response){

              $scope.posts = response.data.posts;
              $scope.maxpages=response.data.pages;
              $scope.busy=false;

              if(insertAds){
                $scope.posts.splice( Math.floor((Math.random() * count) + 1),0,{type:100});
                $scope.posts.splice( Math.floor((Math.random() * count) + 1),0,{type:100});
              }

              $scope.htmlReady();
            });
          };

        $scope.init();

     $scope.loadMore = function () {

       if(!$scope.busy){
           var category=$routeParams.category;

        if($scope.page < $scope.maxpages){
            wp.getPosts(count,$scope.page,category).then(function (response){
                $scope.maxpages=response.data.pages;
                angular.forEach(response.data.posts,function(item) {

                 $scope.posts.push(item);
             });
               $scope.busy=false;
               $scope.htmlReady();

           });
        }
       }
     }
  })

  .directive('googleAdsense', function($window, $compile) {
    return {
      restrict: 'A',
      transclude: true,
      template: adSenseTpl,
      replace: false,
      link: function postLink(scope, element, iAttrs) {
        element.html("");
        element.append(angular.element($compile(adSenseTpl)(scope)));
        if (!$window.adsbygoogle) {
          $window.adsbygoogle = [];
        }
        $window.adsbygoogle.push({});
      }
    };
  });
