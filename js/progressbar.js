$(document).ready(function() {

	var water = 1000;
	var food = 1000;
	var bowl = 0;

	var duration = 1000;

	var opts_watertank;
	var opts_foodtank;
	var opts_bowl;
	$.fn.loading = function() {


    // refill tanks
    $('.refill').click(function() {
			refreshData(1000,1000,null);
    })

		// initial value setting
		refreshData(water,food,bowl);


		// feed circle
		var circlePortion;
		var circleRotation;

		$('.feedCircle').mousemove(function(event) {
			circlePortion = Math.ceil((event.pageX - 67) / 2.4 / 5) * 5;
			circleRotation = (circlePortion * 3.6);

			$('.circlePortion').text(circlePortion);
			$('.feedPicker').css('transform', 'rotate(' + circleRotation + 'deg)')
		});



    // feed button
    $('.feedButton').click(function() {
      if(food >= circlePortion && circlePortion <= (100 - bowl)) {
        var foodtank_new = food - circlePortion;
        var bowl_new = bowl + circlePortion;

        //$('.bowl').attr('data-percent', bowl_new);
				//$('.foodtank').attr('data-percent', foodtank_new);

				refreshData(null,foodtank_new,bowl_new);
      }
    })

	}

	function refreshData(waterNew,foodNew,bowlNew){

		// statusbar water tank
		$('.watertank').each(function() {
			var target_watertank  = $(this); // var = $('.watertank')

			water = waterNew != null ? waterNew : water;

			target_watertank.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + water + '</span></div>');

			var rotate_watertank = target_watertank.find('.rotate');
			setTimeout(function() {
				rotate_watertank.css({
					'transition': 'transform ' + duration + 'ms linear',
					'transform': 'rotate(' + water * 0.36 + 'deg)'
				});
			},1);

			if (water > 500) {
				var animationRight = 'toggle ' + (duration / water * 500) + 'ms step-end';
				var animationLeft = 'toggle ' + (duration / water * 500) + 'ms step-start';
				target_watertank.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				target_watertank.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});

		// statusbar food tank
		$('.foodtank').each(function() {
			var target_foodtank  = $(this); // var = $('.foodtank')
			$('.tank').attr('data-percent', food);

			food = foodNew != null ? foodNew : food;

			target_foodtank.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + food + '</span></div>');

			var rotate_foodtank = target_foodtank.find('.rotate');
			setTimeout(function() {
				rotate_foodtank.css({
					'transition': 'transform ' + duration + 'ms linear',
					'transform': 'rotate(' + food * 0.36 + 'deg)'
				});
			},1);

			if (food > 500) {
				var animationRight = 'toggle ' + (duration / food * 500) + 'ms step-end';
				var animationLeft = 'toggle ' + (duration / food * 500) + 'ms step-start';
				target_foodtank.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				target_foodtank.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});

		// statusbar food bowl
		$('.bowl').each(function() {
			var target_bowl  = $(this);

			bowl = bowlNew != null ? bowlNew : bowl;

			target_bowl.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + bowl + '</span></div>');

			var rotate_bowl = target_bowl.find('.rotate');
			setTimeout(function() {
				rotate_bowl.css({
					'transition': 'transform ' + duration + 'ms linear',
					'transform': 'rotate(' + bowl * 3.6 + 'deg)'
				});
			},1);

			if (bowl > 50) {
				var animationRight = 'toggle ' + (duration / bowl * 50) + 'ms step-end';
				var animationLeft = 'toggle ' + (duration / bowl * 50) + 'ms step-start';
				target_bowl.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				target_bowl.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});
	}

});
