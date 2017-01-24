todo.factory("todoService", function(){
  var _tasks = [
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

  var getTasks = function getTasks(){
    return _tasks;
  }

  var newTask = function newTask(data){
    var task = {
      description: data.description,
      date: data.date,
      complete: false
    }

    _tasks.push(task)
  };

  var deleteTask = function deleteTask(task){
    var index = _tasks.indexOf(task);
    _tasks.splice(index, 1);
  };

  var clearCompleted = function clearCompleted(){
    for(var i = (_tasks.length - 1); i >= 0; i--){
      if (_tasks[i].complete) deleteTask(_tasks[i]);
    }
  }

  return {
    tasks: getTasks,
    new: newTask,
    delete: deleteTask,
    clear: clearCompleted
  }
})
