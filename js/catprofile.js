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

  // pagination aktiv/inaktiv icon

  $('.paginationDot').click(function() {
    $('.paginationDot').removeClass('swipeActivated');
    $(this).addClass('swipeActivated');
  });

  // pagination page swipe

  $('#naviFirstPage').click(function() {
    $('#pagesPetProfile').addClass('pageSwipeToLeft');
  });

});
