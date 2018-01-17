$(document).ready (function() {
  //mydegree = currentfingerposition*3.6;
  //$(".meinkringel").css("transform","rotate("+mydegree+")");

  // statusbar laden

  $('.progressbar').loading();

  // reminder toggle

  $('.reminderToggle').click(function() {
    if($('.reminderToggle').hasClass('on')) {
      $('.reminderToggle').removeClass('on');
      $('.reminderToggle').addClass('off');
      $('.reminderToggleCircle').css('transform', 'translateX(-20px)');
    }
    else if($('.reminderToggle').hasClass('off')) {
      $('.reminderToggle').removeClass('off');
      $('.reminderToggle').addClass('on');
      $('.reminderToggleCircle').css('transform', 'translateX(0px)'); // 0px weil .on bereits margin-left= +20px besitzt, damit startposition des toggle button circle rechts ist
    }
  });

  // settings navigation autofeed

  $('#settingsAutofeed').click(function() {
    $('#pagesSetting').addClass('pageSwipeToLeft');
  });

  // main navigation

  $('.navientry').click(function() {
    $('.navientry').removeClass('activated');
    $(this).addClass('activated');
  });



});
