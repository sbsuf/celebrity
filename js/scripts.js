//var dateChoice = function(number1, number2, number3) {
  //return number1 + number2 + number3
//};
$(document).ready(function() {
  $("form").submit(function(event) {
    var hairColor = $("#hairColor").val();
    var hair = parseInt(hairColor);
    var eyeColor =  $("#eyeColor").val();
    var eye = parseInt(eyeColor);
    var bodyShape = $("#bodyShape").val();
    var body = parseInt(bodyShape);

    var userChoice = (hair + eye + body);

    if (userChoice <= 3) {
      $(".first-celeb").show();
    }
    else if (userChoice >=3 && userChoice <= 9){
      $(".second-celeb").show();
    }

    else if  (userChoice >=9) {
      $(".third-celeb").show();

    }
    else {
      alert ("You suck, Nobody like you.")
    }
    event.preventDefault();
  });
});
