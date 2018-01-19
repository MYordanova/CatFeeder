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


  // pagination swipe history

  $('#naviFirstPageHistory').click(function() {
    if($('#naviSecondPageHistory').hasClass('swipeActivated')) {
      $('#pagesFoodWaterContent').css('transform', 'translateX(0vw)');
    }

    $('.paginationDot').removeClass('swipeActivated');
    $(this).addClass('swipeActivated');
  });

  $('#naviSecondPageHistory').click(function() {
    if($('#naviFirstPageHistory').hasClass('swipeActivated')) {
      $('#pagesFoodWaterContent').css('transform', 'translateX(-100vw)');
    }

    $('.paginationDot').removeClass('swipeActivated');
    $(this).addClass('swipeActivated');
  });

  // pagination swipe profile

  $('#naviFirstPageProfile').click(function() {
    if($('#naviSecondPageProfile').hasClass('swipeActivated')) {
      $('#pagesPetProfile').css('transform', 'translateX(0vw)');
    } else if ($('#naviThirdPageProfile').hasClass('swipeActivated')) {
      $('#pagesPetProfile').css('transform', 'translateX(0vw)');
    }

    $('.paginationDot').removeClass('swipeActivated');
    $(this).addClass('swipeActivated');
  });

  $('#naviSecondPageProfile').click(function() {
    if($('#naviFirstPageProfile').hasClass('swipeActivated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-100vw)');
    } else if ($('#naviThirdPageProfile').hasClass('swipeActivated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-100vw)');
    }

    $('.paginationDot').removeClass('swipeActivated');
    $(this).addClass('swipeActivated');
  });

  $('#naviThirdPageProfile').click(function() {
    if($('#naviFirstPageProfile').hasClass('swipeActivated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-200vw)');
    } else if ($('#naviSecondPageProfile').hasClass('swipeActivated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-200vw)');
    }

    $('.paginationDot').removeClass('swipeActivated');
    $(this).addClass('swipeActivated');
  });

  // settings navigation autofeed

  $('#settingsToAutofeed').click(function() {
    $('#autofeed').css('transform', 'translateX(-100vw)');
    $('.back').addClass('backToSettings');
  });

  $('.back').click(function() {
    $('.back').removeClass('backToSettings');
    $('#autofeed').css('transform', 'translateX(100vw)');
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
