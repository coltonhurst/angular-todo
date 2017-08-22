(function(){
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoService', TodoService);

  function TodoService() {
    var todos = [];

    var addTodo = function(newTodo) {
      todos.push(newTodo);
    };

    var getTodos = function() {
      return todos;
    };

    return {
      addTodo: addTodo,
      getTodos: getTodos
    };
  }
})();
