//

$(document).ready(function() {
 $("#form-group form").submit(function(event) {
   event.preventDefault();
   var operator = $("input:radio[name=destination]:checked").val();
   var operator = $("input:radio[name=person2]:checked").val();
   var operator = $("input:radio[name=weather]:checked").val();
   var operator = $("input:radio[name=activity]:checked").val();
   var operator = $("input:radio[name=agriculture]:checked").val(); {
   $("#output").text(result);
    };
  });
});
  $(document).ready(function() {
    $("#form-group form").submit(function() {
    $(".destination").append("blah blah");
    $(".person2").append("blah blah");
    $(".weather").append("blah blah");
    $(".activity").append("blah blah");
    $(".agriculture").append("blah blah");

    $("#story").show();
  });
});
