
todo.directive("todoList", function(){

  return {
    templateUrl: "js/directives/todoList.html",
    restrict: "E",
    scope: {
      tasks: "=",
      completedHidden: "=",
      delete: '&'
    }
  };

});
