'use strict';


angular.module('angularWpApp')
  .factory('wp', function ($q,$http) {

    var API_BASE_URL ='https://www.codetutorial.io/api/';

    return {
      getCategory: function(){
        return $http.get(API_BASE_URL+ 'get_category_index/');
      }
    }
  });
