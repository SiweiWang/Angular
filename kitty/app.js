(function () {
  'use strict'

  // However, this will have a issue with minification. The name "DIController" will get changed during minification.
  //angular.module("DIApp", []).controller('DIController', DIController);
  // To fix that, we need 
  angular.module("App", []).controller('MsgController', MsgController);


  MsgController.$inject = ['$scope', '$filter'];
  // $scope and $filter are services here. They are injected by angular framework
  function MsgController ($scope, $filter) {
    $scope.name = "Siwei";
    $scope.kitty_number  = 1;

    $scope.sayMessage = function() {
      return "More kitties ?"
    };

    $scope.moreKitty = function() {
      $scope.kitty_number = $scope.kitty_number + 1
    };
  }
})();