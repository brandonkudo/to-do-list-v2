





$(document).ready(function() {
  $("form#newTasks").submit(function(event) {
    event.preventDefault();
    var newTasksVal = $("#task").val();
    var output = '<li>' + newTasksVal + '</li>'


    $("#output").append(output);
    $("#output").children("li").click(function() {
      $(this).remove();
    });

  });
});
