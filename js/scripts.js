//put your biz-logic here:
var leapYear = function(year) {

}



//put your UI logic here:
$(document).ready(function() {
  $(".machine").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $(".result").text(result);
  });
});
