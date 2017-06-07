//put your biz-logic here:
var leapYear = function(year) {
  return false;
};



//put your UI logic here:
$(document).ready(function() {
  $("form#machine").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
        console.log(result);
    $("#result").text(result);
  });
});
