  //business logic

    function pingPong()  {

    var number = parseInt($("#input1").val());
      for (var index = 1; index <= number; index += 1) {
      if ((index % 3 === 0) && (index % 5 === 0)) {
        $("ul#list").append("<li>ping-pong</li>");
      } else if (index % 3 === 0) {
        $("ul#list").append("<li>ping</li>");
      } else if (index % 5 === 0) {
        $("ul#list").append("<li>pong</li>");
      } else {
        $("ul#list").append("<li>" + index + "</li>");
      };
    };
  };

  //user logic

  $(document).ready(function() {
    $("form#form1").submit(function(event) {
        event.preventDefault();
        pingPong();
        $("#result-div").show();
  });
});
