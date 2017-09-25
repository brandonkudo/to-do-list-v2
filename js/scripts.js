$(document).ready(function() {
  $("form#newTasks").submit(function(event) {
    event.preventDefault();
    var output = '<li>' + $("#task").val() + '</li>'
   $("input#task").val("");
   $("#output").append(output);
    $("#output").children("li").click(function() {
      $(this).remove();
    });
  });
});
