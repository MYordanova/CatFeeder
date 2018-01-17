$(document).ready(function() {
	$.fn.loading = function() {
		var DEFAULTS = {
			percent: 0,
			duration: 1000
		};


		// statusbar water and food tank (100% = 1000)

		$('.tank').each(function() {
			var target_tank  = $(this); // var = $('.tank')

			var opts_tank = {
			percent: target_tank.data('percent') ? target_tank.data('percent') : DEFAULTS.percent, // percent: if data-percent vorhanden ?dann data-percent nutzen :else DEFAULT percent nutzen
			duration: target_tank.data('duration') ? target_tank.data('duration') : DEFAULTS.duration
			};

			target_tank.append('<div class="background_tank"></div><div class="rotate_tank"></div><div class="left_tank"></div><div class="right_tank"></div><div class=""><span>' + opts_tank.percent + '</span></div>');

			var rotate = target_tank.find('.rotate_tank');
			setTimeout(function() {
				rotate.css({
					'transition': 'transform ' + opts_tank.duration + 'ms linear',
					'transform': 'rotate(' + opts_tank.percent * 0.36 + 'deg)'
				});
			},1);

			if (opts_tank.percent > 500) {
				var animationRight = 'toggle ' + (opts_tank.duration / opts_tank.percent * 500) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts_tank.duration / opts_tank.percent * 500) + 'ms step-start';
				target_tank.find('.right_tank').css({
					animation: animationRight,
					opacity: 1
				});
				target_tank.find('.left_tank').css({
					animation: animationLeft,
					opacity: 0
				});
			}
		});


		// statusbar food bowl (100% = 100)

		$('.bowl').each(function() {
			var target_bowl  = $(this);

			var opts_bowl = {
			percent: target_bowl.data('percent') ? target_bowl.data('percent') : DEFAULTS.percent,
			duration: target_bowl.data('duration') ? target_bowl.data('duration') : DEFAULTS.duration
			};

			target_bowl.append('<div class="background_bowl"></div><div class="rotate_bowl"></div><div class="left_bowl"></div><div class="right_bowl"></div><div class=""><span>' + opts_bowl.percent + '</span></div>');

			var rotate = target_bowl.find('.rotate_bowl');
			setTimeout(function() {
				rotate.css({
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

		$('.refill').click(function() {
	    $(".tank").attr('data-percent', '1000');
			$('.progressbar').loading();
	  })

    // $('.feedButton').click(function() {
    //   var minus = target_tank.data('percent') - 100;
    //   $(".tank").attr('data-percent', minus);
    // 
		// 	$('.progressbar').loading();
    // })

	}
});
