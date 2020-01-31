$(document).ready(function () {
	$(".menu_icon").click(function () {
		$(".header_sp_nav").slideToggle();
		$(this).toggleClass('is_active');
		return false;
	});

	$('.header_sp_nav li ul').hide();
	$(".header_sp_nav ul li").click(function () {
		$("ul", this).toggle();
	});

	$("li").click(function (event) {
		event.stopPropagation();
	});

	$(window).resize(function () {
		var windowWidth = $(window).outerWidth();
		if (windowWidth <= 767 &&
			$('.menu_icon').hasClass('is_active')) {
			$('.header_sp_nav').show();
		}
		else if (windowWidth > 767 &&
			$(".header_sp_nav").is(":visible")) {
			$('.header_sp_nav').hide();
		}
	});

	$(".nhcenterslide").slick({
		dots: true,
		infinite: true,
		// autoplay: true,
		centerMode: true,
		autoplaySpeed: 5000,
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	//for sp story slider
	$(".slider-area").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});