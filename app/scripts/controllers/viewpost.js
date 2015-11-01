'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:ViewpostCtrl
 * @description
 * # ViewpostCtrl
 * Controller of the angularWpApp
 */


var API_URL = 'http://angular.codetutorial.io:3000'

angular.module('angularWpApp')
  .controller('ViewpostCtrl', function ($scope,$routeParams,wp  ) {

    wp.getPost($routeParams.postId).then(function (response){

      $scope.title =response.data.post.title;

      var rendered = angular.element('<div></div>');
      rendered.append(response.data.post.content);

      rendered.find('.crayon-syntax').each(function(i,val){
         var content = $(this).find('textarea').val();
         var id =  $(this).attr('id');
           rendered.find("#"+id).replaceWith('<div hljs>'+content+'</div>');
      });

      rendered.find('div').removeClass();

      rendered.find('img').removeClass().addClass('img-responsive center-block').wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );

      $scope.content = rendered.html();

    });
  });
