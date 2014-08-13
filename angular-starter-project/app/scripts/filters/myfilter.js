'use strict';

/**
 * @ngdoc filter
 * @name angularStarterProjectApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularStarterProjectApp.
 */
angular.module('angularStarterProjectApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
