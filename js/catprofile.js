$(document).ready (function() {

  $('.confirmHabit').hide();

  $('#buttonAddHabit').click(function(){
      $('.confirmHabit').show();
      $(this).hide();
  });
  
});
