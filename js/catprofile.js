$(document).ready (function() {

  $('#addButtonPhoto').click(function() {
    $(this).addClass('activated');
    setTimeout(function() {
      $('#addButtonPhoto').removeClass('activated');
    }, 100);
  });

  $('#confirmButtonHabit').hide();
  $('#closeButtonHabit').hide();
  $('#editButtonHabit').hide();
  $('.displayInformation').hide();
  $('.captionNewHabit').hide();

  $('#addButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#addButtonHabit').removeClass('activated');
      $('#addButtonHabit').hide();
      $('#timePortionPickerActive').show();
      $('#confirmButtonHabit').show();
      $('#closeButtonHabit').show();
      $('.captionNewHabit').show();
    }, 100);
  });

  $('#closeButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#closeButtonHabit').removeClass('activated');
      $('#closeButtonHabit').hide();
      $('#confirmButtonHabit').hide();
      $('.captionNewHabit').hide();
      $('.displayInformation').hide();
      $('#addButtonHabit').show();
    }, 100);
  });

  $('#confirmButtonHabit').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#confirmButtonHabit').removeClass('activated');
      $('#confirmButtonHabit').hide();
      $('#closeButtonHabit').hide();
      $('#addButtonHabit').show();
      $('#timePortionPickerActive').hide();
      $('#timePortionPickerInactive').show();
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
