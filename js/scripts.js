$(document).ready(function() {
 $("#form-group form").submit(function(event) {
   var person1Input = $("input:radio[name=person1]:checked").val();
   var person2Input = $("input:radio[name=person2]:checked").val();
   var weatherInput = $("input:radio[name=weather]:checked").val();
   var acvtivityInput = $("input:radio[name=activity]:checked").val();
   var agricultureInput = $("input:radio[name=person2]:checked").val();

   #("span#person1").text(person1Input);

  event.preventDefault();
  });
});
 
