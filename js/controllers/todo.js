
todo.controller("TodoCtl", [
  "$scope", "todoService",
  function($scope, todoService){

    $scope.completedHidden = false;

    $scope.tasks = todoService.tasks()

    var resetForm = function resetForm(data, form){
      form.$setPristine();
      form.$setUntouched();

      data.description = null;
      data.date = null;
    };

    $scope.newTask = function(valid, data, form){
      if(valid){
        todoService.new(data)
        resetForm(data, form);
      }
    };

    $scope.deleteTask = function deleteTask(task){
      todoService.delete(task);
    };

    $scope.clearCompleted = function clearCompleted(){
      todoService.clear();
    };

    $scope.toggleCompleted = function toggleCompleted(){
      $scope.completedHidden = !$scope.completedHidden;
    };
  }

]);
