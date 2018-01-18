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

  $('#naviMainPage').click(function() {
    $('.chapter').css('z-index','1');
    $('#mainPageContent').css('z-index','2');
  });

  $('#naviHistory').click(function() {
    $('.chapter').css('z-index','1');
    $('#historyContent').css('z-index','2');
  });

  $('#naviProfile').click(function() {
    $('.chapter').css('z-index','1');
    $('#profileContent').css('z-index','2');
  });

  $('#naviSettings').click(function() {
    $('.chapter').css('z-index','1');
    $('#settingsContent').css('z-index','2');
  });

});
