'use strict';


angular.module('angularWpApp')
  .factory('wp', function ($q,$http) {

    var API_URL = 'http://angular.codetutorial.io:3000'

    return {
      getCategory: function(){
        return $http.get(API_URL+ '/api/get_category_index/');
      }
    }
  });
