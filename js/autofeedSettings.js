$(document).ready (function() {

  $('#buttonCloseAutoFeed').hide();
  $('#buttonConfirmAutoFeed').hide();


  $('#buttonEditAutoFeed').click(function(){
    $(this).hide();
    $('#buttonCloseAutoFeed').show();
    $('#buttonConfirmAutoFeed').show();
  });

  $('#buttonCloseAutoFeed').click(function(){
    $(this).hide();
    $('#buttonEditAutoFeed').show();
    $('#buttonConfirmAutoFeed').hide();
  });

  $('#buttonConfirmAutoFeed').click(function(){
    $(this).hide();
    $('#buttonEditAutoFeed').show();
    $('#buttonCloseAutoFeed').hide();
  });

});
