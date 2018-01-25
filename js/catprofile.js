var timeportionpicker = "<div class='timePortionPicker editpicker'>";
timeportionpicker +=  "<div id='timePortionPickerActive' class='displayInformation'></div>";
timeportionpicker +=  "<div id='timePortionPickerInactive' class='displayInformation'></div></div>";



$(document).ready (function() {

  $('#addButtonPhoto').click(function() {
    $(this).addClass('activated');
    setTimeout(function() {
      $('#addButtonPhoto').removeClass('activated');
    }, 100);
  });

  $('#confirmButtonHabit').hide();
  $('#editButtonHabit').hide();
  $('.displayInformation').hide();
  $('#newHabit .displayHeader').hide();

  $('#addcloseButtonHabit').click(function(){

    var numOfHabits = $("#newHabit .habits .timePortionPicker").length;
    $(this).toggleClass("activated",true);


    if ($(this).hasClass("cancelmode")) {
      if ($("#newHabit .habits").hasClass("editmode")) {
        $(".timePortionPicker").toggleClass("editpicker",false);
      } else if ($("#newHabit .habits").hasClass("addmode")) {
        $("#newHabit .habits .timePortionPicker").first().remove();
        if (numOfHabits == 1) $('#newHabit .displayHeader').hide();
      }

      $(this).toggleClass("cancelmode",false);

      $('#confirmButtonHabit').hide();
      $('#editButtonHabit').show();
      $('#closeButtonHabit').hide();
      $("#newHabit .habits").toggleClass("editmode",false);
      $("#newHabit .habits").toggleClass("addmode",false);


    } else {
      $("#newHabit .habits").toggleClass("addmode",true);
      $("#newHabit .habits").prepend(timeportionpicker);
      $(this).toggleClass("cancelmode",true);
      $('#confirmButtonHabit').show();
      $('#editButtonHabit').hide();
      $('#closeButtonHabit').show();
      $('#newHabit .displayHeader').show();
    }

    setTimeout(function() {$('#addcloseButtonHabit').toggleClass("activated",false);}, 300);
  });

  $('#confirmButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#confirmButtonHabit').removeClass('activated');
      $('#editButtonHabit').removeClass('activated');
      $('#confirmButtonHabit').hide();
      $('#addcloseButtonHabit').toggleClass("cancelmode");
      $('#editButtonHabit').show();

      $(".timePortionPicker").toggleClass("editpicker",false);
      $("#newHabit .habits").toggleClass("editmode",false);
      $("#newHabit .habits").toggleClass("addmode",false);

    }, 100);
  });


  $('#editButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#editButtonHabit').removeClass('activated');
      $('#editButtonHabit').hide();
      $('#confirmButtonHabit').show();

      $("#newHabit .habits").toggleClass("editmode",true);
      $(".timePortionPicker").toggleClass("editpicker",true);

      $('#addcloseButtonHabit').toggleClass("cancelmode");
    }, 100);
  });





  // $('#confirmButtonHabit').click(function() {
  //   $(this).addClass('activated');
  //   setTimeout(function() {
  //     $('#confirmButtonHabit').removeClass('activated');
  //     if($('.displayInformation').hasClass('confirm')) {
  //       $('.displayPortion').css('border', 'none')
  //       $('.hours').css('border', 'none')
  //     }
  //   }, 100);
  // });
});
