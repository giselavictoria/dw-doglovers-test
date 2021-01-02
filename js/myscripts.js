$(document).ready(function () {
	if (window.matchMedia('(max-width: 768px)').matches || $('input[type=checkbox]').is(':checked')) {
		$('.menu-items').click(function () {
			$(':checkbox').prop('checked', false).removeAttr('checked');
		});
	} else {
		$('.nav-menu').show();
	}
});


//Back to top button//
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 200);
		return false;
	});
});

//Whatsapp button//
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.whatsapp-container').fadeIn();
		} else {
			$('.whatsapp-container').fadeOut();
		}
	});
});

//Modal Bootstrap//
$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
})


//Counter section-nosotros//
$(document).ready(function () {
	$(window).scroll(function () {
		$('.counter').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {
				duration: 3500,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
				}
			})
		})
	})
});

