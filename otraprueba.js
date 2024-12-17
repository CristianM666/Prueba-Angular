(function () {
'use strict';

Angular.module('Primerprueba', [])

.controller('Primercontrol', function ($scope) {
  $scope.name="Cristian";
  $scope.sayHello = function () {
  return "Hello Cristian!"
};|
});

})();
