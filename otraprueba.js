(function () {

Angular.module('Primerprueba', [])

.controller('Primercontrol', function ($scope) {
  $SCOPE.name="Cristian";
  $SCOPE.sayHello = function () {
  return "Hello Cristian!"
};
});

})();
