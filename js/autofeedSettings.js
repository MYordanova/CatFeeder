$(document).ready (function() {

  $('#closeButtonAutofeed').hide();
  $('#confirmButtonAutofeed').hide();
  $('#datePickerBeginActive').hide();
  $('#datePickerEndActive').hide();

  $('#editButtonAutofeed').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#editButtonAutofeed').removeClass('activated');
      $('#editButtonAutofeed').hide();
      $('#closeButtonAutofeed').show();
      $('#datePickerBeginInactive').hide();
      $('#datePickerBeginActive').show();
      $('#confirmButtonAutofeed').show();
    }, 100);
  });

  $('#closeButtonAutofeed').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#closeButtonAutofeed').removeClass('activated');
      $('#closeButtonAutofeed').hide();
      $('#editButtonAutofeed').show();
      $('#datePickerBeginActive').hide();
      $('#datePickerBeginInactive').show();
      $('#confirmButtonAutofeed').hide();
    }, 100);
  });

  $('#confirmButtonAutofeed').click(function(){
    $(this).addClass('activated');
    setTimeout(function() {
      $('#confirmButtonAutofeed').removeClass('activated');
      $('#confirmButtonAutofeed').hide();
      $('#editButtonAutofeed').show();
      $('#datePickerBeginInactive').show();
      $('#datePickerBeginActive').hide();
      $('#closeButtonAutofeed').hide();
    }, 100);
  });

});
