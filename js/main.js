$(document).ready (function() {
  //mydegree = currentfingerposition*3.6;
  //$(".meinkringel").css("transform","rotate("+mydegree+")");


// MainNavigation

  $('.navientry').on('click', function() {
    $('.navientry').removeClass('activated');
    $(this).addClass('activated');
<<<<<<< HEAD
=======

  });

// Cat Profile Buttons

  $('.confirmHabit').hide();

  $('#buttonAddHabit').click(function(){
      $('.confirmHabit').show();
      $(this).hide();
>>>>>>> 22dc4ebf21ca707900b9fe251e1e783704d32f93
  });

  
});
