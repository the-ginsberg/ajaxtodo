function ready(){
  $('#new_task').on("ajax:success", function(event, data){
    console.log("Success!");
    // window.location.reload();
    // console.log(arguments);
    $('#task_name').val("");
    $('body').append(data);
  }).on("ajax:error", function(){
    console.log("Error!");
  });
}

$(document).on("page:load ready", ready)
