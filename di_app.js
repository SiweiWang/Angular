(function () {
  'use strict'

  angular.module("DIApp", []).controller('DIController', DIController);

  // $scope and $filter are services here. They are injected by angular framework
  function DIController ($scope, $filter) {
    $scope.name = "Siwei"
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  }
})();