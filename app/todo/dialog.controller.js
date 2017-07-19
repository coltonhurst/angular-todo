(function(){
  'use strict';

  angular
    .module('TodoApp')
    .controller('DialogController', DialogController);

    function DialogController($mdDialog) {
      var vm = this;
      vm.message = "hello!";
      vm.hide = function() {
        $mdDialog.hide();
      };
      vm.cancel = function() {
        $mdDialog.cancel();
      };
      vm.add = function(answer) {
        $mdDialog.hide(answer);
      };
    }
})();
