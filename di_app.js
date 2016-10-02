(function () {
  'use strict'

  // However, this will have a issue with minification. The name "DIController" will get changed during minification.
  //angular.module("DIApp", []).controller('DIController', DIController);
  // To fix that, we need 
  angular.module("DIApp", []).controller('DIController', DIController);


  DIController.$inject = ['$scope', '$filter'];
  // $scope and $filter are services here. They are injected by angular framework
  function DIController ($scope, $filter) {
    $scope.name = "Siwei"
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  }
})();