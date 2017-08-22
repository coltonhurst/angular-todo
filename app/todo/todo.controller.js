(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('TodoController', TodoController);

  function TodoController($mdDialog, TodoService) {
    var vm = this;
    vm.todos = TodoService.getTodos();
    vm.showCreateTodoDialog = function (evt) {
      $mdDialog.show({
        templateUrl: 'app/todo/createTodo.dialog.html',
        parent: angular.element(document.body),
        targetEvent: evt,
        clickOutsideToClose: true
      });
    };
    vm.deleteTodo = function (todo) {
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);
    };
  }
})();
