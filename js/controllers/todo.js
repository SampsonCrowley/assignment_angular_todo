
todo.controller("TodoCtl", [
  "$scope",
  function($scope){

    $scope.completedHidden = false;

    $scope.tasks = [
      {
        description: "test",
        date: new Date(),
        complete: false
      },
      {
        description: "task2",
        date: new Date(),
        complete: true
      },
      {
        description: "task3",
        date: new Date(),
        complete: false
      }
    ];

    var resetForm = function resetForm(data, form){
      form.$setPristine();
      form.$setUntouched();

      data.description = null;
      data.date = null;
    };

    $scope.newTask = function(valid, data, form){
      if(valid){
        var task = {
          description: data.description,
          date: data.date,
          complete: false
        }

        resetForm(data, form);

        $scope.tasks.push(task)
      }
    };

    $scope.deleteTask = function deleteTask(task){
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
    };

    $scope.clearCompleted = function clearCompleted(){
      var tasks = $scope.tasks;
      var task;
      for(var i = (tasks.length - 1); i >= 0; i--){
        task = tasks[i];
        if (task.complete) $scope.deleteTask(task);
      }
    };
    $scope.toggleCompleted = function toggleCompleted(){
      $scope.completedHidden = !$scope.completedHidden;
    };
  };

]);
