'use strict'

angular
  .module('funchatModule', [])
  .directive('funchat', () => ({
    restrict: 'E',
    scope: {},
    template: require('./funchat.html'),
    controller: ['$scope', '$http', ($scope, $http) => {

      $scope.editable = {}
      $scope.editing = {}

      $scope.styles = {
      }

      $scope.sendMessage = (author, content) => {
        $http.post('https://funchat-api.herokuapp.com/messages', {author, content}).then(refreshMessages)
      }

      $scope.updateMessage = (id, content, author) => {
        $http.put(`https://funchat-api.herokuapp.com/messages/${id}`, {author, content}).then(refreshMessages)
        $scope.editable[id] = false
      }

      $scope.toggleEditable = (id, index) => {
        $scope.editable[id] = true
        $scope.editing[id] = angular.copy($scope.messages[index].content)
      }

      const refreshMessages = () => {
        $http.get('https://funchat-api.herokuapp.com/messages?limit=10').then((response) => {
          $scope.messages = response.data
        })
      }

      refreshMessages()

    }]
  }))

module.exports = "funchatModule"
