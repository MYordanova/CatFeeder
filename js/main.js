$(document).ready (function() {
  //mydegree = currentfingerposition*3.6;
  //$(".meinkringel").css("transform","rotate("+mydegree+")");


// MainNavigation

  $('.navientry').on('click', function() {
    $('.navientry').removeClass('activated');
    $(this).addClass('activated');
  });

});
