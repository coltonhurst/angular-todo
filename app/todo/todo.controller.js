(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  function TodoController() {
    var vm = this;
    vm.name = "Colton Hurst";
    vm.appendToName = function (whatToAppend) {
      vm.name += whatToAppend;
    }
  }
})();

/*
IIFE:
(function(){

})();
*/
