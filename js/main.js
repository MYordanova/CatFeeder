$.mobile.autoInitializePage = false;

$(document).ready(function() {

  // main page

  // statusbar laden
  $('.progressbar').loading();

  // wechsel von feed zu autofeed
  $('.autofeedCircle').click(function() {
    if($('.feedCircle').hasClass('activated')) {
      $('.autofeedCircle').addClass('activated');
      $('.feedCircle').removeClass('activated');
      $('.feedPicker').hide();
      $('.circlePortion').hide();
      $('.circleGram').hide();
      $('.feedButton').hide();

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
        $('.autofeedOption').animate({
          fontSize: '1rem',
          lineHeight: '1rem'
        });
        $('.autofeedOption span').animate({
          lineHeight: '1.5rem'
        });
      }, 50);

      setTimeout(function() {
        $('.autofeedButton').css({
          visibility: 'visible'
        });
      }, 450);
    }
  });

  // wechsel von autofeed zu feed
  $('.feedCircle').click(function() {
    if($('.autofeedCircle').hasClass('activated')) {
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
      $('.autofeedOption').animate({
        fontSize: '0.5rem',
        lineHeight: '0.5rem'
      });
      $('.autofeedOption span').animate({
        lineHeight: '0.85rem'
      });
      $('.autofeedButton').css({
        visibility: 'hidden'
      });

      setTimeout(function() {
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
      }, 50);

      setTimeout(function() {
        $('.feedCircle').addClass('activated');
        $('.autofeedCircle').removeClass('activated');
        $('.feedPicker').show();
        $('.circlePortion').show();
        $('.circleGram').show();
        $('.feedButton').show();
      }, 450);
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
    }, 200);

  });





  // cat profile
  var timeportionpicker = "<div class='timePortionPicker editpicker'>";
  timeportionpicker +=  "<div id='timePortionPickerActive' class='displayInformation'></div>";
  timeportionpicker +=  "<div id='timePortionPickerInactive' class='displayInformation'></div></div>";

  $('#addButtonPhoto').click(function() {
    $(this).addClass('activated');
    setTimeout(function() {
      $('#addButtonPhoto').removeClass('activated');
    }, 200);
  });

  $('#confirmButtonHabit').hide();
  $('#editButtonHabit').hide();
  $('.displayInformation').hide();
  $('#newHabit .displayHeader').hide();

  $('#addcloseButtonHabit').click(function(){
    var numOfHabits = $("#newHabit .habits .timePortionPicker").length;
    $(this).toggleClass("activated",true);

    if ($('.addclosetrans').hasClass("cancelmode_add")) {
      $('#editButtonHabit').show();
      if ($("#newHabit .habits").hasClass("editmode")) {
        $(".timePortionPicker").toggleClass("editpicker",false);
      } else if ($("#newHabit .habits").hasClass("addmode")) {
        $("#newHabit .habits .timePortionPicker").first().remove();
        if (numOfHabits == 1) {
          $('#newHabit .displayHeader').hide();
          $('#editButtonHabit').hide();
        }
      }
      $('.addclosetrans').toggleClass("cancelmode_add",false);
      $('#confirmButtonHabit').hide();
      $("#newHabit .habits").toggleClass("editmode",false);
      $("#newHabit .habits").toggleClass("addmode",false);
    } else {

      $("#newHabit .habits").toggleClass("addmode",true);
      $("#newHabit .habits").prepend(timeportionpicker);
      $('.addclosetrans').toggleClass("cancelmode_add",true);
      $('#confirmButtonHabit').show();
      $('#editButtonHabit').hide();
      $('#newHabit .displayHeader').show();
    }

    setTimeout(function() {
      $('#addcloseButtonHabit').toggleClass("activated",false);
    }, 200);
  });

  $('#confirmButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#confirmButtonHabit').removeClass('activated');
      $('#editButtonHabit').removeClass('activated');
      $('#confirmButtonHabit').hide();
      $('.addclosetrans').toggleClass("cancelmode_add");
      $('#editButtonHabit').show();

      $(".timePortionPicker").toggleClass("editpicker",false);
      $("#newHabit .habits").toggleClass("editmode",false);
      $("#newHabit .habits").toggleClass("addmode",false);

    }, 200);
  });

  $('#editButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#editButtonHabit').removeClass('activated');
      $('#editButtonHabit').hide();
      $('#confirmButtonHabit').show();
      $("#newHabit .habits").toggleClass("editmode",true);
      $(".timePortionPicker").toggleClass("editpicker",true);
      $('.addclosetrans').toggleClass("cancelmode_add");
    }, 200);
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
      if($('.datePicker').hasClass('notdefault')) {
        $('#autofeedToggle').removeClass('off');
        $('#autofeedToggle').addClass('on');
        $('#autofeedToggleCircle').css('transform', 'translateX(20px)');
        $('.autofeedPosition').text('');

        if($('#checkboxUnlimited').hasClass('activated')) {
          $('.autofeedOption').text('unlimited');
        } else if($('.datePicker').hasClass('notdefault')) {
          if(i < 10) {
            $('.autofeedOption').html(oldBeginDay + '.' + ('0' + (i + 1)) + '.' + oldBeginYear + '<br>' + ' – ' + '<br>' + '<span style="line-height:0.85rem">' + oldEndDay + '.' + ('0' + (j + 1)) + '.' + oldEndYear + '</span>');
          } else {
            $('.autofeedOption').html(oldBeginDay + '.' + (i + 1) + '.' + oldBeginYear + '<br>' + ' – ' + '<br>' + '<span style="line-height:0.85rem">' + oldEndDay + '.' + (j + 1) + '.' + oldEndYear + '</span>');
          }
        }
      } else if($('.datePicker').hasClass('default')) {
        if($('#checkboxUnlimited').hasClass('activated')) {
          $('#autofeedToggle').removeClass('off');
          $('#autofeedToggle').addClass('on');
          $('#autofeedToggleCircle').css('transform', 'translateX(20px)');
          $('.autofeedPosition').text('');
          $('.autofeedOption').text('unlimited');
        } else {
          $('#all').toggleClass('activated', true);
          $('#all-eskalation').toggleClass('activated', true);
          $('.eskalation').toggleClass('activated', true);
          $('#setDuration').text('Set duration first.');
        }
      }
    }
  });

  $('#all-eskalation').click(function() {
    if($('#all').hasClass('activated')) {
      $('#all').toggleClass('activated', false);
      $('#all-eskalation').toggleClass('activated', false);
      $('.eskalation').toggleClass('activated', false);
      $('.eskalation').text('');
    }
  });

  //autofeed buttons
  $('#closeButtonAutofeed').hide();
  $('#confirmButtonAutofeed').hide();

  $('#editButtonAutofeed').click(function(){
    $(this).addClass('activated');
    $('.editclosetrans').toggleClass('cancelmode_edit', true);
    $('.datePicker').removeClass('default');
    setTimeout(function() {
      $('#editButtonAutofeed').hide();
      $('#closeButtonAutofeed').show();
      $('#confirmButtonAutofeed').show();
      $('.datePickerContent').removeClass('border');
      $('.datePicker').addClass('border');
    }, 200);
  });

  $('#closeButtonAutofeed').click(function(){
    $(this).addClass('activated');
    $('.editclosetrans').toggleClass('cancelmode_edit', false);
    $('#editButtonAutofeed').removeClass('activated');
    $('.datePicker').removeClass('notdefault');
    $('.datePicker').addClass('default');
    setTimeout(function() {
      $('#closeButtonAutofeed').removeClass('activated');
      $('#closeButtonAutofeed').hide();
      $('#editButtonAutofeed').show();
      $('#confirmButtonAutofeed').hide();
      $('.datePicker').removeClass('border');
      $('.datePickerContent').addClass('border');
      $('.datePicker').empty();
      $('#datePickerBeginDay').append(DEFAULTS.currday);
      $('#datePickerEndDay').append(DEFAULTS.nextday);
      $('#datePickerBeginMonth').append(DEFAULTS.currmonthB);
      $('#datePickerEndMonth').append(DEFAULTS.currmonthE);
      $('#datePickerBeginYear, #datePickerEndYear').append(DEFAULTS.curryear);
    }, 200);
  });

  $('#confirmButtonAutofeed').click(function(){
    $(this).addClass('activated');
    $('.editclosetrans').toggleClass('cancelmode_edit', false);
    $('#editButtonAutofeed').removeClass('activated');
    $('.datePicker').removeClass('default');
    $('.datePicker').addClass('notdefault');
    setTimeout(function() {
      $('#confirmButtonAutofeed').removeClass('activated');
      $('#confirmButtonAutofeed').hide();
      $('#editButtonAutofeed').show();
      $('#closeButtonAutofeed').hide();
      $('.datePicker').removeClass('border');
      $('.datePickerContent').addClass('border');
    }, 200);
  });

  $('.button').click(function(){
    // aktualisiere
    if($('#autofeedToggle').hasClass('on')) {
      if($('#checkboxUnlimited').hasClass('activated')) {
        $('.autofeedOption').text('unlimited');
      } else if($('.datePicker').hasClass('notdefault')) {
        if(i < 10) {
          $('.autofeedOption').html(oldBeginDay + '.' + ('0' + (i + 1)) + '.' + oldBeginYear + '<br>' + ' – ' + '<br>' + '<span style="line-height:0.85rem">' + oldEndDay + '.' + ('0' + (j + 1)) + '.' + oldEndYear + '</span>');
        } else {
          $('.autofeedOption').html(oldBeginDay + '.' + (i + 1) + '.' + oldBeginYear + '<br>' + ' – ' + '<br>' + '<span style="line-height:0.85rem">' + oldEndDay + '.' + (j + 1) + '.' + oldEndYear + '</span>');
        }
      }
    }
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
  var j = currdate.getMonth();
  var DEFAULTS = {
    currday: currdate.getDate(),
    currmonthB: month[i],
    currmonthE: month[j],
    curryear: currdate.getFullYear(),
    nextday: (currdate.getDate() + 1)
  };
  var oldBeginDay = DEFAULTS.currday;
  var oldEndDay = DEFAULTS.nextday;
  var oldBeginMonth = DEFAULTS.currmonthB;
  var oldEndMonth = DEFAULTS.currmonthE;
  var oldBeginYear = DEFAULTS.curryear;
  var oldEndYear = DEFAULTS.curryear;

  // DEFAULT werte ausgeben
  $('#datePickerBeginDay').append(DEFAULTS.currday);
  $('#datePickerEndDay').append(DEFAULTS.nextday);
  $('#datePickerBeginMonth').append(DEFAULTS.currmonthB);
  $('#datePickerEndMonth').append(DEFAULTS.currmonthE);
  $('#datePickerBeginYear, #datePickerEndYear').append(DEFAULTS.curryear);

  // day
  $('#datePickerBeginDay').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
        if(oldBeginDay < 31) {
          oldBeginDay = oldBeginDay + 1;
          $(this).append(oldBeginDay);
        } else {
          oldBeginDay = oldBeginDay - 30;
          $(this).append(oldBeginDay);
        }
      } else
      if(i == 3 || i == 5 || i == 8 || i == 10) {
        if(oldBeginDay < 30) {
          oldBeginDay = oldBeginDay + 1;
          $(this).append(oldBeginDay);
        } else {
          oldBeginDay = oldBeginDay - 29;
          $(this).append(oldBeginDay);
        }
      } else
      if(i == 1) {
        if(oldBeginDay < 28) {
          oldBeginDay = oldBeginDay + 1;
          $(this).append(oldBeginDay);
        } else {
          oldBeginDay = oldBeginDay - 27;
          $(this).append(oldBeginDay);
        }
      }
    }
  });
  $('#datePickerBeginDay').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
        if(oldBeginDay > 1) {
          oldBeginDay = oldBeginDay - 1;
          $(this).append(oldBeginDay);
        } else {
          oldBeginDay = oldBeginDay + 30;
          $(this).append(oldBeginDay);
        }
      } else
      if(i == 3 || i == 5 || i == 8 || i == 10) {
        if(oldBeginDay > 1) {
          oldBeginDay = oldBeginDay - 1;
          $(this).append(oldBeginDay);
        } else {
          oldBeginDay = oldBeginDay + 29;
          $(this).append(oldBeginDay);
        }
      } else
      if(i == 1) {
        if(oldBeginDay > 1) {
          oldBeginDay = oldBeginDay - 1;
          $(this).append(oldBeginDay);
        } else {
          oldBeginDay = oldBeginDay + 27;
          $(this).append(oldBeginDay);
        }
      }
    }
  });
  $('#datePickerEndDay').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(j == 0 || j == 2 || j == 4 || j == 6 || j == 7 || j == 9 || j == 11) {
        if(oldEndDay < 31) {
          oldEndDay = oldEndDay + 1;
          $(this).append(oldEndDay);
        } else {
          oldEndDay = oldEndDay - 30;
          $(this).append(oldEndDay);
        }
      } else
      if(j == 3 || j == 5 || j == 8 || j == 10) {
        if(oldEndDay < 30) {
          oldEndDay = oldEndDay + 1;
          $(this).append(oldEndDay);
        } else {
          oldEndDay = oldEndDay - 29;
          $(this).append(oldEndDay);
        }
      } else
      if(j == 1) {
        if(oldEndDay < 28) {
          oldEndDay = oldEndDay + 1;
          $(this).append(oldEndDay);
        } else {
          oldEndDay = oldEndDay - 27;
          $(this).append(oldEndDay);
        }
      }
    }
  });
  $('#datePickerEndDay').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(j == 0 || j == 2 || j == 4 || j == 6 || j == 7 || j == 9 || j == 11) {
        if(oldEndDay > 1) {
          oldEndDay = oldEndDay - 1;
          $(this).append(oldEndDay);
        } else {
          oldEndDay = oldEndDay + 30;
          $(this).append(oldEndDay);
        }
      } else
      if(j == 3 || j == 5 || j == 8 || j == 10) {
        if(oldEndDay > 1) {
          oldEndDay = oldEndDay - 1;
          $(this).append(oldEndDay);
        } else {
          oldEndDay = oldEndDay + 29;
          $(this).append(oldEndDay);
        }
      } else
      if(j == 1) {
        if(oldEndDay > 1) {
          oldEndDay = oldEndDay - 1;
          $(this).append(oldEndDay);
        } else {
          oldEndDay = oldEndDay + 27;
          $(this).append(oldEndDay);
        }
      }
    }
  });

  // month
  $('#datePickerBeginMonth').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i < 11) {
        oldBeginMonth = month[i = i + 1];
        $(this).append(oldBeginMonth);
      } else {
        oldBeginMonth = month[i = i - 11];
        $(this).append(oldBeginMonth);
      }

      if(i == 3 || i == 5 || i == 8 || i == 10 && oldBeginDay < 30) {
        oldBeginDay = 30;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(oldBeginDay);
      }
      if(i == 1 || i == 12 && oldBeginDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        oldBeginDay = 28;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(oldBeginDay);
      }
    }
  });
  $('#datePickerBeginMonth').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(i > 0) {
        oldBeginMonth = month[i = i - 1];
        $(this).append(oldBeginMonth);
      } else {
        oldBeginMonth = month[i = i + 11];
        $(this).append(oldBeginMonth);
      }

      if(i == 3 || i == 5 || i == 8 || i == 10 && oldBeginDay < 30) {
        oldBeginDay = 30;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(oldBeginDay);
      }
      if(i == 1 || i == 12 && oldBeginDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        oldBeginDay = 28;
        $('#datePickerBeginDay').empty();
        $('#datePickerBeginDay').append(oldBeginDay);
      }
    }
  });
  $('#datePickerEndMonth').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(j < 11) {
        oldEndMonth = month[j = j + 1];
        $(this).append(oldEndMonth);
      } else {
        oldEndMonth = month[j = j - 11];
        $(this).append(oldEndMonth);
      }

      if(j == 3 || j == 5 || j == 8 || j == 10 && oldEndDay < 30) {
        oldEndDay = 30;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(oldEndDay);
      }
      if(j == 1 || j == 12 && oldEndDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        oldEndDay = 28;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(oldEndDay);
      }
    }
  });
  $('#datePickerEndMonth').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      if(j > 0) {
        oldEndMonth = month[j = j - 1];
        $(this).append(oldEndMonth);
      } else {
        oldEndMonth = month[j = j + 11];
        $(this).append(oldEndMonth);
      }

      if(j == 3 || j == 5 || j == 8 || j == 10 && oldEndDay < 30) {
        oldEndDay = 30;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(oldEndDay);
      }
      if(j == 1 || j == 12 && oldEndDay < 28) { // 12 gibts nicht, aber ohne funktionierts nicht
        oldEndDay = 28;
        $('#datePickerEndDay').empty();
        $('#datePickerEndDay').append(oldEndDay);
      }
    }
  });

  // year
  $('#datePickerBeginYear').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      oldBeginYear = oldBeginYear + 1;
      $(this).append(oldBeginYear);
      if(oldEndYear < oldBeginYear) {
        $('#datePickerEndYear').empty();
        oldEndYear = oldEndYear + 1;
        $('#datePickerEndYear').append(oldEndYear);
      }
    }
  });
  $('#datePickerBeginYear').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      if(oldBeginYear > DEFAULTS.curryear) {
        $(this).empty();
        oldBeginYear = oldBeginYear - 1;
        $(this).append(oldBeginYear);
      }
    }
  });
  $('#datePickerEndYear').on('swipeup', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      $(this).empty();
      oldEndYear = oldEndYear + 1;
      $(this).append(oldEndYear);
    }
  });
  $('#datePickerEndYear').on('swipedown', function(event) {
    if($('#editButtonAutofeed').hasClass('activated')) {
      if(oldEndYear > DEFAULTS.curryear && oldEndYear > oldBeginYear) {
        $(this).empty();
        oldEndYear = oldEndYear - 1;
        $(this).append(oldEndYear);
      }
    }
  });

  // autofeed checkbox unlimited
  $('#checkboxUnlimited').click(function() {
    if($(this).hasClass('activated')) {
      $(this).removeClass('activated');
      $('.buttonsAutofeed').show();
      $('.autofeedDate').show();
    } else {
      $(this).addClass('activated');
      $('.buttonsAutofeed').hide();
      $('.autofeedDate').hide();
      // text unlimited anzeigen -> s. autofeed toggle
    }

    // aktualisiere
    if($('#autofeedToggle').hasClass('on')) {
      if($('#checkboxUnlimited').hasClass('activated')) {
        $('.autofeedOption').text('unlimited');
      } else if($('.datePicker').hasClass('notdefault')) {
        if(i < 10) {
          $('.autofeedOption').html(oldBeginDay + '.' + ('0' + (i + 1)) + '.' + oldBeginYear + '<br>' + ' – ' + '<br>' + '<span style="line-height:0.85rem">' + oldEndDay + '.' + ('0' + (j + 1)) + '.' + oldEndYear + '</span>');
        } else {
          $('.autofeedOption').html(oldBeginDay + '.' + (i + 1) + '.' + oldBeginYear + '<br>' + ' – ' + '<br>' + '<span style="line-height:0.85rem">' + oldEndDay + '.' + (j + 1) + '.' + oldEndYear + '</span>');
        }
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
    }, 200);
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
