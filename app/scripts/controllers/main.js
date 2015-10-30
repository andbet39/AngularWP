'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '<ins class="ad-div adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-7296294573929906" data-ad-slot="9951268670"></ins></ins>';



angular.module('angularWpApp')
  .controller('MainCtrl', function ($scope,$http,$routeParams ) {

        $scope.page=0;
        var count='10';
        $scope.busy=true;
        var method ='';
        var insertAds=true;

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

              if(insertAds){
                $scope.posts.splice( Math.floor((Math.random() * count) + 1),0,{type:100});
                $scope.posts.splice( Math.floor((Math.random() * count) + 1),0,{type:100});
              }

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
