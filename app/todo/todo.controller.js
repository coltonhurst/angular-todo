(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  function TodoController($mdDialog, TodoFactory) {
    var vm = this;
    vm.showCreateTodoDialog = function (evt) {
      $mdDialog.show({
        templateUrl: 'app/todo/createTodo.dialog.html',
        parent: angular.element(document.body),
        targetEvent: evt,
        clickOutsideToClose: true
      });
    }
    vm.todos = TodoFactory.getTodos();
  }
})();