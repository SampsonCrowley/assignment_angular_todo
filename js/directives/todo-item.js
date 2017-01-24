todo.directive("todoItem", function(){

  return {
    templateUrl: "js/directives/todo-item.html",
    restrict: "A",
    scope: {
      task: "=",
      delete: '&'
    }
  };

});
