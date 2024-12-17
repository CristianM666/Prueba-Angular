(function () {

Angular.module('Primerprueba', [])

.controller('Primercontrol', function ($SCOPE) {
  $SCOPE.name="Cristian";
  $SCOPE.sayHello = function () {
  return "Hello Cristian!"
};
});

})();
