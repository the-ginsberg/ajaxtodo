function ready(){
  $('#task_due_date').datepicker(
      { dateFormat: "yy-mm-dd" }
    );

  $('#new_task').on("ajax:success", function(event, data){
    console.log("Success!");
    // window.location.reload();
    // console.log(arguments);
    $('#task_name').val("");
    $('#task_due_date').val("");
    $('body').append(data);
  }).on("ajax:error", function(){
    console.log("Error!");
  });
}

$(document).on("page:load ready", ready)
