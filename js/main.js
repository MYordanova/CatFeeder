$(document).ready(function() {
  //mydegree = currentfingerposition*3.6;
  //$(".meinkringel").css("transform","rotate("+mydegree+")");

  // main page

  // statusbar laden
  $('.progressbar').loading();

  // wechsel von feed zu autofeed
  $('.autofeedCircle').click(function() {
    if($('.feedCircle').hasClass('activated')) {
      $('.autofeedCircle').addClass('activated');
      $('.feedCircle').removeClass('activated');
      $('.feedPicker').removeClass('activated');

      $('.feedPicker').hide();
      $('.circlePortion').hide();
      $('.circleGram').hide();
      $('.feedButton').hide();

      var calc_1 = $(window).width() / 2 - 120 + 'px';
      $('.autofeedCircle').animate({
        width: '240px',
        height: '240px',
        top: '190px',
        left: calc_1
      });
      $('.autofeedCircleRing.bigRing').animate({
        backgroundSize: '240px',
        width: '240px',
        height: '240px'
      });
      $('.autofeedCircleRing.smallRing').animate({
        backgroundSize: '236px',
        width: '236px',
        height: '236px'
      });
      $('.autofeedCircleShape').animate({
        backgroundSize: '160px',
        width: '160px',
        height: '160px',
        top: '20px',
        left: '10px',
        fontSize: '1.5rem'
      });

      var calc_2 = $(window).width() / 2 + 100 + 'px';
      $('.feedCircle').animate({
        width: '120px',
        height: '120px',
        top: '450px',
        left: calc_2
      });
      $('.feedCircleRing.bigRing').animate({
        backgroundSize: '120px',
        width: '120px',
        height: '120px'
      });
      $('.feedCircleRing.smallRing').animate({
        backgroundSize: '116px',
        width: '116px',
        height: '116px'
      });
      $('.feedCircleShape').animate({
        backgroundSize: '80px',
        width: '80px',
        height: '80px',
        top: '12px',
        left: '6px'
      });

      setTimeout(function() {
        $('.autofeedButton').css({
          visibility: 'visible'
        });
      }, 400);


    }
  });

  // wechsel von autofeed zu feed
  $('.feedCircle').click(function() {
    if($('.autofeedCircle').hasClass('activated')) {
      var calc_1 = $(window).width() / 2 - 120 + 'px';
      $('.feedCircle').animate({
        width: '240px',
        height: '240px',
        top: '190px',
        left: calc_1
      });
      $('.feedCircleRing.bigRing').animate({
        backgroundSize: '240px',
        width: '240px',
        height: '240px'
      });
      $('.feedCircleRing.smallRing').animate({
        backgroundSize: '236px',
        width: '236px',
        height: '236px'
      });
      $('.feedCircleShape').animate({
        backgroundSize: '160px',
        width: '160px',
        height: '160px',
        top: '20px',
        left: '70px'
      });

      var calc_2 = $(window).width() / 2 - 120 - 100 + 'px';
      $('.autofeedCircle').animate({
        width: '120px',
        height: '120px',
        top: '450px',
        left: calc_2
      });
      $('.autofeedCircleRing.bigRing').animate({
        backgroundSize: '120px',
        width: '120px',
        height: '120px'
      });
      $('.autofeedCircleRing.smallRing').animate({
        backgroundSize: '116px',
        width: '116px',
        height: '116px'
      });
      $('.autofeedCircleShape').animate({
        backgroundSize: '80px',
        width: '80px',
        height: '80px',
        top: '12px',
        left: '34px',
        right: '6px',
        fontSize: '1rem'
      });
      $('.autofeedButton').css({
        visibility: 'hidden'
      });

      setTimeout(function() {
        $('.feedCircle').addClass('activated');
        $('.autofeedCircle').removeClass('activated');
        $('.feedPicker').addClass('activated');

        $('.feedPicker').show();
        $('.circlePortion').show();
        $('.circleGram').show();
        $('.feedButton').show();
      }, 400);
    }
  });

  // autofeed button zu autofeed settings
  $('.autofeedButton').click(function() {
    $('.autofeedButton').addClass('activated');
    setTimeout(function() {
      $('.autofeedButton').removeClass('activated');

      $('.chapter').css('z-index','1');
      $('#settingsContent').css('z-index','2');
      $('.navientry').removeClass('activated');
      $('#naviSettings').addClass('activated');
      $('#autofeed').css('transform', 'translateX(-100vw)');
      $('.backToSettings').addClass('backButton');
    }, 100);


  });




  // settings

  // reminder toggle
  $('#reminderToggle').click(function() {
    // wenns an ist : aus machen
    if($('#reminderToggle').hasClass('on')) {
      $('#reminderToggle').removeClass('on');
      $('#reminderToggle').addClass('off');
      $('#reminderToggleCircle').css('transform', 'translateX(-20px)');
    }
    // wenns aus ist : an machen
    else if($('#reminderToggle').hasClass('off')) {
      $('#reminderToggle').removeClass('off');
      $('#reminderToggle').addClass('on');
      $('#reminderToggleCircle').css('transform', 'translateX(0px)'); // 0px weil .on bereits margin-left= +20px besitzt, damit startposition des toggle button circle rechts ist
    }
  });

  // autofeed toggle
  $('#autofeedToggle').click(function() {
    // wenns an ist : aus machen
    if($('#autofeedToggle').hasClass('on')) {
      $('#autofeedToggle').removeClass('on');
      $('#autofeedToggle').addClass('off');
      $('#autofeedToggleCircle').css('transform', 'translateX(0px)');

      $('.autofeedPosition').text('OFF');
    }
    // wenns aus ist : an machen
    else if($('#autofeedToggle').hasClass('off')) {
      $('#autofeedToggle').removeClass('off');
      $('#autofeedToggle').addClass('on');
      $('#autofeedToggleCircle').css('transform', 'translateX(20px)');

      $('.autofeedPosition').text('ON');
    }
  });




  // allgemein

  // pagination swipe history
  $('#naviFirstPageHistory').click(function() {
    if($('#naviSecondPageHistory').hasClass('activated')) {
      $('#pagesFoodWaterContent').css('transform', 'translateX(0vw)');
    }
    $('.paginationDotHistory').removeClass('activated');
    $(this).addClass('activated');
  });
  $('#naviSecondPageHistory').click(function() {
    if($('#naviFirstPageHistory').hasClass('activated')) {
      $('#pagesFoodWaterContent').css('transform', 'translateX(-100vw)');
    }
    $('.paginationDotHistory').removeClass('activated');
    $(this).addClass('activated');
  });

  $('#foodContent').on('swipeleft', function(event) {
    $('#pagesFoodWaterContent').css('transform', 'translateX(-100vw)');
    $('.paginationDotHistory').removeClass('activated');
    $('#naviSecondPageHistory').addClass('activated');
  });
  $('#waterContent').on('swiperight', function(event) {
    $('#pagesFoodWaterContent').css('transform', 'translateX(0vw)');
    $('.paginationDotHistory').removeClass('activated');
    $('#naviFirstPageHistory').addClass('activated');
  });

  // pagination swipe profile
  $('#naviFirstPageProfile').click(function() {
    if($('#naviSecondPageProfile').hasClass('activated')) {
      $('#pagesPetProfile').css('transform', 'translateX(0vw)');
    } else if ($('#naviThirdPageProfile').hasClass('activated')) {
      $('#pagesPetProfile').css('transform', 'translateX(0vw)');
    }
    $('.paginationDotProfile').removeClass('activated');
    $(this).addClass('activated');
  });
  $('#naviSecondPageProfile').click(function() {
    if($('#naviFirstPageProfile').hasClass('activated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-100vw)');
    } else if ($('#naviThirdPageProfile').hasClass('activated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-100vw)');
    }
    $('.paginationDotProfile').removeClass('activated');
    $(this).addClass('activated');
  });
  $('#naviThirdPageProfile').click(function() {
    if($('#naviFirstPageProfile').hasClass('activated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-200vw)');
    } else if ($('#naviSecondPageProfile').hasClass('activated')) {
      $('#pagesPetProfile').css('transform', 'translateX(-200vw)');
    }
    $('.paginationDotProfile').removeClass('activated');
    $(this).addClass('activated');
  });

  $('#generalInfoProfile').on('swipeleft', function(event) {
    $('#pagesPetProfile').css('transform', 'translateX(-100vw)');
    $('.paginationDotProfile').removeClass('activated');
    $('#naviSecondPageProfile').addClass('activated');
  });
  $('#foodProfile').on('swipeleft', function(event) {
    $('#pagesPetProfile').css('transform', 'translateX(-200vw)');
    $('.paginationDotProfile').removeClass('activated');
    $('#naviThirdPageProfile').addClass('activated');
  });
  $('#foodProfile').on('swiperight', function(event) {
    $('#pagesPetProfile').css('transform', 'translateX(0vw)');
    $('.paginationDotProfile').removeClass('activated');
    $('#naviFirstPageProfile').addClass('activated');
  });
  $('#eatingHabitsProfile').on('swiperight', function(event) {
    $('#pagesPetProfile').css('transform', 'translateX(-100vw)');
    $('.paginationDotProfile').removeClass('activated');
    $('#naviSecondPageProfile').addClass('activated');
  });

  // settings swipe
  $('#settingsToAutofeed').click(function() {
    $('#autofeed').css('transform', 'translateX(-100vw)');
    $('.backToSettings').addClass('backButton');
  });
  $('.backToSettings').click(function() {
    $('.backButton').addClass('activated');
    setTimeout(function() {
      $('.backButton').removeClass('activated');
      $('.backToSettings').removeClass('backButton');
      $('#autofeed').css('transform', 'translateX(100vw)');
    }, 100);
  });
  $('#autofeed').on('swiperight', function(event) {
    $('.backToSettings').removeClass('backButton');
    $('#autofeed').css('transform', 'translateX(100vw)');
  });

  // main navigation
  $('.navientry').click(function() {
    $('.navientry').removeClass('activated');
    $(this).addClass('activated');

    $('#pagesFoodWaterContent').css('transform', 'translateX(0vw)');
    $('.paginationDotHistory').removeClass('activated');
    $('#naviFirstPageHistory').addClass('activated');

    $('#pagesPetProfile').css('transform', 'translateX(0vw)');
    $('.paginationDotProfile').removeClass('activated');
    $('#naviFirstPageProfile').addClass('activated');

    $('.backToSettings').removeClass('backButton');
    $('#autofeed').css('transform', 'translateX(100vw)');
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
