var timeportionpicker = "<div class='timePortionPicker editpicker'>";
timeportionpicker +=  "<div id='timePortionPickerActive' class='displayInformation'></div>";
timeportionpicker +=  "<div id='timePortionPickerInactive' class='displayInformation'></div></div>";

$(document).ready (function() {

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
});
