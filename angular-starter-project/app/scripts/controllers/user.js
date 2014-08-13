'use strict';

/**
 * @ngdoc function
 * @name angularStarterProjectApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angularStarterProjectApp
 */
angular.module('angularStarterProjectApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
