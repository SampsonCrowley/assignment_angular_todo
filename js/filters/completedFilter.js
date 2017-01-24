
todo.filter("completedFilter", function(){

  return function(completables, hidden){
    var filteredOutput;
    if (!hidden){
      filteredOutput = completables;
    } else {
      filteredOutput = completables.filter(function(completable){
        return !completable.complete;
      });
    }
    return filteredOutput;
  };

});
