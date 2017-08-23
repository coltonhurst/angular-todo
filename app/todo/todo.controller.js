(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  function TodoController($mdDialog, TodoService) {
    var vm = this;
    vm.todos = TodoService.getTodos();
    vm.showCreateTodoDialog = function (event) {
      $mdDialog.show({
        templateUrl: 'app/todoDialog/createTodo.dialog.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true
      });
    };
    vm.deleteTodo = function (todo) {
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);
    };
  }
})();
