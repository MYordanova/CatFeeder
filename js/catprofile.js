$(document).ready (function() {

  $('#buttonConfirmHabit').hide();
  $('#buttonCloseHabit').hide();
  $('.addnewHabit').hide();


  $('#buttonAddHabit').click(function(){
      $(this).hide();
      $('#buttonConfirmHabit').show();
      $('#buttonCloseHabit').show();
      $('.addnewHabit').show();

  });

  $('#buttonCloseHabit').click(function(){
      $(this).hide();
      $('#buttonConfirmHabit').hide();
      $('.addnewHabit').hide();
      $('#buttonAddHabit').show();
  });

  $('#buttonConfirmHabit').click(function(){
      $(this).hide();
      $('#buttonCloseHabit').hide();
      $('.addnewHabit').show();
      $('#buttonAddHabit').show();
    });

    $('.paginationDot').click(function() {
      $('.paginationDot').removeClass('swipeActivated');
      $(this).addClass('.swipeActivated');
    });

    $( "#naviThirdPage" ).click(function() {
   $('html,body').animate({
         scrollTop: $("#eatingHabitsProfile").offset().top},
        'slow');
});
});