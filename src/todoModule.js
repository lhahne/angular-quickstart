'use strict'

angular
  .module('todo', [])
  .directive('todos', () => ({
    restrict: 'E',
    scope: {},
    template: require('./todos.html'),
    controller: ['$scope', ($scope) => {

      $scope.styles = {
        list: {
          'list-style-type': 'none'
        },
        done: {
          'text-decoration': 'line-through',
          'color': 'grey'
        }
      }

      $scope.todos = [{name: 'Pese pyykit', completed: false}, {name: 'Vie roskat', completed: true}]

      $scope.createTodo = (name) => {
        $scope.todos.push({name, completed: false})
      }
    }]
  }))

module.exports = "todo"
