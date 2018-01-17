$(document).ready (function() {
  //mydegree = currentfingerposition*3.6;
  //$(".meinkringel").css("transform","rotate("+mydegree+")");

  // statusbar

  $('.progressbar').loading();

  // reminder toggle

  $('.reminderToggle').click(function() {
    if($('.reminderToggle').hasClass('on')) {
      $('.reminderToggle').removeClass('on');
      $('.reminderToggle').css('justify-content', 'flex-start');

    } else {
      $('.reminderToggle').addClass('on');
      $('.reminderToggle').css('justify-content', 'flex-end');
    };
  });

  // main navigation

  $('.navientry').click(function() {
    $('.navientry').removeClass('activated');
    $(this).addClass('activated');
  });



});
