$(document).ready (function() {
  //mydegree = currentfingerposition*3.6;
  //$(".meinkringel").css("transform","rotate("+mydegree+")");

  // statusbar

  $('.progressbar').loading();

  // main navigation

  $('.navientry').click(function() {
    $('.navientry').removeClass('activated');
    $(this).addClass('activated');
  });



});
