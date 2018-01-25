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
      $('.autofeedOption').text('');
    }
    // wenns aus ist : an machen
    else if($('#autofeedToggle').hasClass('off')) {
      $('#autofeedToggle').removeClass('off');
      $('#autofeedToggle').addClass('on');
      $('#autofeedToggleCircle').css('transform', 'translateX(20px)');
      $('.autofeedPosition').text('ON');
    }
  });

  //autofeed buttons
  $('#closeButtonAutofeed').hide();
  $('#confirmButtonAutofeed').hide();

  $('#editButtonAutofeed').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#editButtonAutofeed').hide();
      $('#closeButtonAutofeed').show();
      $('#confirmButtonAutofeed').show();
      $('.datePickerContent').removeClass('border');
      $('.datePicker').addClass('border');
      $('#editButtonAutofeed').addClass('activated');
    }, 100);
  });

  $('#closeButtonAutofeed').click(function(){
    $(this).addClass('activated');
    $('#editButtonAutofeed').removeClass('activated');
    setTimeout(function() {
      $('#closeButtonAutofeed').removeClass('activated');
      $('#closeButtonAutofeed').hide();
      $('#editButtonAutofeed').show();
      $('#confirmButtonAutofeed').hide();
      $('.datePicker').removeClass('border');
      $('.datePickerContent').addClass('border');
    }, 100);
  });

  $('#confirmButtonAutofeed').click(function(){
    $(this).addClass('activated');
    $('#editButtonAutofeed').removeClass('activated');
    setTimeout(function() {
      $('#confirmButtonAutofeed').removeClass('activated');
      $('#confirmButtonAutofeed').hide();
      $('#editButtonAutofeed').show();
      $('#closeButtonAutofeed').hide();
      $('.datePicker').removeClass('border');
      $('.datePickerContent').addClass('border');
    }, 100);
  });


  //autofeed date
  var currdate = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var i = currdate.getMonth();
  var DEFAULTS = {
    currday: currdate.getDate(),
    currmonth: month[i],
    curryear: currdate.getFullYear(),
    nextday: (currdate.getDate() + 1)
  };
  var newBeginDay = DEFAULTS.currday;
  var newEndDay = DEFAULTS.nextday;
  var newBeginMonth = DEFAULTS.currmonth;
  var newEndMonth = DEFAULTS.currmonth;
  var newBeginYear = DEFAULTS.curryear;
  var newEndYear = DEFAULTS.curryear;

  // DEFAULT werte ausgeben
  $('#datePickerBeginDay').append(DEFAULTS.currday);
  $('#datePickerEndDay').append(DEFAULTS.nextday);
  $('#datePickerBeginMonth, #datePickerEndMonth').append(DEFAULTS.currmonth);
  $('#datePickerBeginYear, #datePickerEndYear').append(DEFAULTS.curryear);

  // day
  $('#datePickerBeginDay').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
        if(newBeginDay < 31) {
          newBeginDay = newBeginDay + 1;
          $(this).append(newBeginDay);
        } else {
          newBeginDay = newBeginDay - 30;
          $(this).append(newBeginDay);
        }
      } else
      if(i == 3 || i == 5 || i == 8 || i == 10) {
        if(newBeginDay < 30) {
          newBeginDay = newBeginDay + 1;
          $(this).append(newBeginDay);
        } else {
          newBeginDay = newBeginDay - 29;
          $(this).append(newBeginDay);
        }
      } else
      if(i == 1) {
        if(newBeginDay < 28) {
          newBeginDay = newBeginDay + 1;
          $(this).append(newBeginDay);
        } else {
          newBeginDay = newBeginDay - 27;
          $(this).append(newBeginDay);
        }
      }
    }
  });
  $('#datePickerBeginDay').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
        if(newBeginDay > 1) {
          newBeginDay = newBeginDay - 1;
          $(this).append(newBeginDay);
        } else {
          newBeginDay = newBeginDay + 30;
          $(this).append(newBeginDay);
        }
      } else
      if(i == 3 || i == 5 || i == 8 || i == 10) {
        if(newBeginDay > 1) {
          newBeginDay = newBeginDay - 1;
          $(this).append(newBeginDay);
        } else {
          newBeginDay = newBeginDay + 29;
          $(this).append(newBeginDay);
        }
      } else
      if(i == 1) {
        if(newBeginDay > 1) {
          newBeginDay = newBeginDay - 1;
          $(this).append(newBeginDay);
        } else {
          newBeginDay = newBeginDay + 27;
          $(this).append(newBeginDay);
        }
      }
    }
  });
  $('#datePickerEndDay').on('swipeup', function(event) {
      if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
        if(newEndDay < 31) {
          newEndDay = newEndDay + 1;
          $(this).append(newEndDay);
        } else {
          newEndDay = newEndDay - 30;
          $(this).append(newEndDay);
        }
      } else
      if(i == 3 || i == 5 || i == 8 || i == 10) {
        if(newEndDay < 30) {
          newEndDay = newEndDay + 1;
          $(this).append(newEndDay);
        } else {
          newEndDay = newEndDay - 29;
          $(this).append(newEndDay);
        }
      } else
      if(i == 1) {
        if(newEndDay < 28) {
          newEndDay = newEndDay + 1;
          $(this).append(newEndDay);
        } else {
          newEndDay = newEndDay - 27;
          $(this).append(newEndDay);
        }
      }
    }
  });
  $('#datePickerEndDay').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
        if(newEndDay > 1) {
          newEndDay = newEndDay - 1;
          $(this).append(newEndDay);
        } else {
          newEndDay = newEndDay + 30;
          $(this).append(newEndDay);
        }
      } else
      if(i == 3 || i == 5 || i == 8 || i == 10) {
        if(newEndDay > 1) {
          newEndDay = newEndDay - 1;
          $(this).append(newEndDay);
        } else {
          newEndDay = newEndDay + 29;
          $(this).append(newEndDay);
        }
      } else
      if(i == 1) {
        if(newEndDay > 1) {
          newEndDay = newEndDay - 1;
          $(this).append(newEndDay);
        } else {
          newEndDay = newEndDay + 27;
          $(this).append(newEndDay);
        }
      }
    }
  });

  // month
  $('#datePickerBeginMonth').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i < 11) {
        newBeginMonth = month[i = i + 1];
        $(this).append(newBeginMonth);
      } else {
        newBeginMonth = month[i = i - 11];
        $(this).append(newBeginMonth);
      }

      if(i == 3 || i == 5 || i == 8 || i == 10 && newBeginDay < 30) {
        newBeginDay = 30;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(newBeginDay);
      }
      if(i == 1 || i == 12 && newBeginDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        newBeginDay = 28;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(newBeginDay);
      }
    }
  });
  $('#datePickerBeginMonth').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i > 0) {
        newBeginMonth = month[i = i - 1];
        $(this).append(newBeginMonth);
      } else {
        newBeginMonth = month[i = i + 11];
        $(this).append(newBeginMonth);
      }

      if(i == 3 || i == 5 || i == 8 || i == 10 && newBeginDay < 30) {
        newBeginDay = 30;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(newBeginDay);
      }
      if(i == 1 || i == 12 && newBeginDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        newBeginDay = 28;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(newBeginDay);
      }
    }
  });
  $('#datePickerEndMonth').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i < 11) {
        newEndMonth = month[i = i + 1];
        $(this).append(newEndMonth);
      } else {
        newEndMonth = month[i = i - 11];
        $(this).append(newEndMonth);
      }

      if(i == 3 || i == 5 || i == 8 || i == 10 && newEndDay < 30) {
        newEndDay = 30;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(newEndDay);
      }
      if(i == 1 || i == 12 && newEndDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        newEndDay = 28;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(newEndDay);
      }
    }
  });
  $('#datePickerEndMonth').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i > 0) {
        newEndMonth = month[i = i - 1];
        $(this).append(newEndMonth);
      } else {
        newEndMonth = month[i = i + 11];
        $(this).append(newEndMonth);
      }

      if(i == 3 || i == 5 || i == 8 || i == 10 && newEndDay < 30) {
        newEndDay = 30;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(newEndDay);
      }
      if(i == 1 || i == 12 && newEndDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        newEndDay = 28;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(newEndDay);
      }
    }
  });

  // year
  $('#datePickerBeginYear').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      newBeginYear = newBeginYear + 1;
      $(this).append(newBeginYear);
    }
  });
  $('#datePickerBeginYear').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      if(newBeginYear > DEFAULTS.curryear) {
        $(this).empty();
        newBeginYear = newBeginYear - 1;
        $(this).append(newBeginYear);
      }
    }
  });
  $('#datePickerEndYear').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      newEndYear = newEndYear + 1;
      $(this).append(newEndYear);
    }
  });
  $('#datePickerEndYear').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      if(newEndYear > DEFAULTS.curryear) {
        $(this).empty();
        newEndYear = newEndYear - 1;
        $(this).append(newEndYear);
      }
    }
  });

  // autofeed checkbox unlimited
  $('#checkboxUnlimited').click(function() {
    if($(this).hasClass('activated')) {
      $(this).removeClass('activated');
      $('.buttonsAutofeed').show();
      $('.autofeedDate').show();
      $('.autofeedOption').text('');
    } else {
      $(this).addClass('activated');
      $('.buttonsAutofeed').hide();
      $('.autofeedDate').hide();
      if($('#autofeedToggle').hasClass('on')) {
        $('.autofeedOption').text('unlimited');
      } else
      if($('#autofeedToggle').hasClass('off')) {
        $('.autofeedOption').text('');
      }
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
