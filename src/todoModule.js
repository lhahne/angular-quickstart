'use strict'

angular
  .module('todo', [])
  .directive('todos', () => ({
    restrict: 'E',
    scope: {},
    template: require('./todos.html'),
    controller: ['$scope', ($scope) => {

      $scope.todos = [{name: 'Pese pyykit', completed: false}, {name: 'Vie roskat', completed: true}]

    }]
  }))

module.exports = "todo"
