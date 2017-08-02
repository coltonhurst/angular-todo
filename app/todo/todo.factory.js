(function(){
  'use strict';

  angular
    .module('TodoApp')
    .service('TodoFactory', TodoFactory);

  function TodoFactory() {
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