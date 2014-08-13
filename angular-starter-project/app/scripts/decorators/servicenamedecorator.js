'use strict';

/**
 * @ngdoc function
 * @name angularStarterProjectApp.decorator:Servicename
 * @description
 * # Servicename
 * Decorator of the angularStarterProjectApp
 */
angular.module('angularStarterProjectApp')
  .config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
