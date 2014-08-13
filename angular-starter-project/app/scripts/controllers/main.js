'use strict';

/**
 * @ngdoc function
 * @name angularStarterProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStarterProjectApp
 */
angular.module('angularStarterProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
