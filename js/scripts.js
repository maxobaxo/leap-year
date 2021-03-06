//put your biz-logic here:
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};



//put your UI logic here:
$(document).ready(function() {
  $("form#machine").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("NOT");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
