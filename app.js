/* Define an Immediately Invoked function expression which helps pervent 
 *variables and function declarations from living longer than expected in the global scope 
 */
(function () {

// Use strict mode of javascirpt
'use strict'

angular.module('NameCalculator', [])
.controller('NameCalculatorController', function ($scope){
  // Define a scope that is bounded to the controller and set a variable to the scope
  // Oncce the variable is set in scope, it can be used in the model using {{name}}
  $scope.name = "";
  $scope.totalValue = 0;

  // Function can also get defined in the scope and get called in the html
  $scope.displayNumeric = function (){
    var totalNameValue = calculaNumericForString($scope.name);
    $scope.totalValue = totalNameValue;

  };

  // function in js can get defined here as well
  function calculaNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i)
    }

    return totalStringValue;
  }

});

})();