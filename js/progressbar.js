$(document).ready(function() {
	var DEFAULTS = {
		percent: 0,
		duration: 1000
	};

	var opts_watertank;
	var opts_foodtank;
	var opts_bowl;
	$.fn.loading = function() {


    // refill tanks
    $('.refill').click(function() {
      //$('.tank').removeData('percent');
      //$('.tank').attr('data-percent', 1000);
      //$('.progressbar').loading();
			refreshData(1000,1000,0);
    })

		// initial value setting
		refreshData(0,0,0);


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

      if(opts_foodtank.percent >= circlePortion && circlePortion <= (100 - opts_bowl.percent)) {
        var foodtank_new = opts_foodtank.percent - circlePortion;
        var bowl_new = opts_bowl.percent + circlePortion;

        $('.bowl').attr('data-percent', bowl_new);
				//$('.foodtank').attr('data-percent', foodtank_new);

				refreshData(foodtank_new);
      }
    })

	}

	function refreshData(food){

		$('.watertank').each(function() {
			var target_watertank  = $(this); // var = $('.watertank')

			opts_watertank = {
			percent: target_watertank.data('percent') ? target_watertank.data('percent') : DEFAULTS.percent, // percent: if data-percent vorhanden ?dann data-percent nutzen :else DEFAULT percent nutzen
			duration: target_watertank.data('duration') ? target_watertank.data('duration') : DEFAULTS.duration
			};

			target_watertank.append('<div class="background_watertank"></div><div class="rotate_watertank"></div><div class="left_watertank"></div><div class="right_watertank"></div><div class=""><span>' + opts_watertank.percent + '</span></div>');

			var rotate_watertank = target_watertank.find('.rotate_watertank');
			setTimeout(function() {
				rotate_watertank.css({
					'transition': 'transform ' + opts_watertank.duration + 'ms linear',
					'transform': 'rotate(' + opts_watertank.percent * 0.36 + 'deg)'
				});
			},1);

			if (opts_watertank.percent > 500) {
				var animationRight = 'toggle ' + (opts_watertank.duration / opts_watertank.percent * 500) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts_watertank.duration / opts_watertank.percent * 500) + 'ms step-start';
				target_watertank.find('.right_watertank').css({
					animation: animationRight,
					opacity: 1
				});
				target_watertank.find('.left_watertank').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});



		// statusbar food tank (100% = 1000)

		$('.foodtank').each(function() {
			var target_foodtank  = $(this); // var = $('.foodtank')
			$('.tank').attr('data-percent', food);
			opts_foodtank = {
			percent: food ? food : DEFAULTS.percent,
			duration: target_foodtank.data('duration') ? target_foodtank.data('duration') : DEFAULTS.duration
			};

			target_foodtank.append('<div class="background_foodtank"></div><div class="rotate_foodtank"></div><div class="left_foodtank"></div><div class="right_foodtank"></div><div class=""><span>' + opts_foodtank.percent + '</span></div>');

			var rotate_foodtank = target_foodtank.find('.rotate_foodtank');
			setTimeout(function() {
				rotate_foodtank.css({
					'transition': 'transform ' + opts_foodtank.duration + 'ms linear',
					'transform': 'rotate(' + opts_foodtank.percent * 0.36 + 'deg)'
				});
			},1);

			if (opts_foodtank.percent > 500) {
				var animationRight = 'toggle ' + (opts_foodtank.duration / opts_foodtank.percent * 500) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts_foodtank.duration / opts_foodtank.percent * 500) + 'ms step-start';
				target_foodtank.find('.right_foodtank').css({
					animation: animationRight,
					opacity: 1
				});
				target_foodtank.find('.left_foodtank').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});



		// statusbar food bowl (100% = 100)

		$('.bowl').each(function() {
			var target_bowl  = $(this);

			opts_bowl = {
			percent: target_bowl.data('percent') ? target_bowl.data('percent') : DEFAULTS.percent,
			duration: target_bowl.data('duration') ? target_bowl.data('duration') : DEFAULTS.duration
			};

			target_bowl.append('<div class="background_bowl"></div><div class="rotate_bowl"></div><div class="left_bowl"></div><div class="right_bowl"></div><div class=""><span>' + opts_bowl.percent + '</span></div>');

			var rotate_bowl = target_bowl.find('.rotate_bowl');
			setTimeout(function() {
				rotate_bowl.css({
					'transition': 'transform ' + opts_bowl.duration + 'ms linear',
					'transform': 'rotate(' + opts_bowl.percent * 3.6 + 'deg)'
				});
			},1);

			if (opts_bowl.percent > 50) {
				var animationRight = 'toggle ' + (opts_bowl.duration / opts_bowl.percent * 50) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts_bowl.duration / opts_bowl.percent * 50) + 'ms step-start';
				target_bowl.find('.right_bowl').css({
					animation: animationRight,
					opacity: 1
				});
				target_bowl.find('.left_bowl').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});
	}

});
