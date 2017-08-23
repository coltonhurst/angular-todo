(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoDialogController', TodoDialogController);

  function TodoDialogController($mdDialog, TodoService) {
    var vm = this;
    vm.hide = function() {
      $mdDialog.hide();
    };
    vm.cancel = function() {
      $mdDialog.cancel();
    };
    vm.add = function() {
      $mdDialog.hide();
      TodoService.addTodo(vm.todoContent);
    };
  }
})();
