todo.controller("TodoCtl", [
  '$scope',
  function($scope){
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
    }

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
    }

  }
])
