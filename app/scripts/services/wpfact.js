'use strict';

/**
 * @ngdoc service
 * @name angularWpApp.wpfact
 * @description
 * # wpfact
 * Factory in the angularWpApp.
 */
angular.module('angularWpApp')
  .factory('wpfact', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
