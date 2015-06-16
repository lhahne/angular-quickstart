'use strict';

angular = require('angular');

angular
  .module('quickstart', [])
  .controller('TodoListController', ['$scope', '$http', function ($scope, $http) {
    $scope.items = [{name: 'imuroi', finished: false},
      {name: 'tiskaa', finished: false}];

    $scope.addItem = function(newItem) {
      $scope.items.push({name: newItem, finished: false});
    };

    $scope.removeItem = function(index) {
      $scope.items.splice(index, 1);
    };
  }]);
