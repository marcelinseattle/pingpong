    //user logic
    $(document).ready(function() {
      $("form#form1").submit(function(event) {
          event.preventDefault();
          var number = parseInt($("#input1").val());

    //business logic
    for (var index = 1; index <= number; index += 1) {
      if ((index % 3 === 0) && (index % 5 === 0)) {
        $("ul#list").append("<li>ping-pong</li>");
      } else if (index % 3 === 0) {
        $("ul#list").append("<li>ping</li>");
      } else if (index % 5 === 0) {
        $("ul#list").append("<li>pong</li>");
      } else {
        $("ul#list").append("<li>" + index + "</li>");
      }
    };
    $("#result-div").show();
  });
});
