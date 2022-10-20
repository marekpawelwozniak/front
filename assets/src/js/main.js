$(function() {
		if(!Cookies.get('close')){
				$(".ads-tab").css("display", "flex");
		}

		$(".close-btn").on("click", function(){
				$(".ads-tab").slideUp();
				Cookies.set('close', true);
		});

		$(window).scroll(function() {
				if ($(this).scrollTop()>0)
				{
						$('.site-header').slideUp();
				}
				else
				{
						$('.site-header').slideDown();
				}
		});

		$('.hero-slider').slick({
				prevArrow: '<div class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></div>',
				nextArrow: '<div class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></div>'
		});

});

