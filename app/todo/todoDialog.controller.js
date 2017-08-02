(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoDialogController', TodoDialogController);

  function TodoDialogController($mdDialog, TodoFactory) {
    var vm = this;
    vm.hide = function() {
      $mdDialog.hide();
    };
    vm.cancel = function() {
      $mdDialog.cancel();
    };
    vm.add = function() {
      $mdDialog.hide();
      TodoFactory.addTodo(vm.todoContent);
    };
  }
})();
