$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
			}
		}
	});
	$(document).on('click', '#contact', function(){
		$("#contacts_bottom").toggleClass('active');
		$(".scroll-btn").hide();
	});
	$(document).on('click', '.close', function(){
		$("#contacts_bottom").animate({opacity:'0'},500);
		$(".scroll-btn").show();
	});
	$('#nav-wrap').prepend('<div id="menu-icon"/div>');
	$("#menu-icon").on("click", function(){
		$("#nav").slideToggle();
		$(this).toggleClass("active");
	});
	$("#menu-icon-2").on("click", function(){
		$(".nav-mob").slideToggle();
		$(this).toggleClass("active");
	});
	var slideIndex2 = 1;
	var slideIndex3 = 1;
	var sliding = false;
	var clb = false;
	if ($(window).width() > '767'){
		$('#fullpage').fullpage({
			sectionsColor: ['#e4d6c8', '#e4d6c8', '#e4d6c8', 'e4d6c8'],
			anchors: ['main', 'characteristics', 'product', 'use',  'contact'],
			css3: true,
			loopHorizontal: false,
			'afterLoad': function(anchorLink, index){
				if(index == 1){
					$('.section #myVideo').animate({opacity:'0'});
					$('#section0 #myVideo').animate({opacity:'1'});
					$('#section0 .text').addClass('active');
					$("#contacts_bottom").animate({opacity:'0'},500);
					$('#scrollUp').fadeOut();
					$('#scrollDown').fadeIn();
				}
				if(index == 2){
					$('.section #myVideo').animate({opacity:'0'});
					$('#section1 #myVideo').animate({opacity:'1'});
					$('#section1 .text_slide_left').addClass('active');
					$("#contacts_bottom").animate({opacity:'0'},500);
					$(".scroll-btn").show();
					$('#scrollUp').fadeIn();
					$('#scrollDown').fadeIn();
				}
				if(index == 3){
					$('.section #myVideo').animate({opacity:'0'});
					$('#section2 #myVideo').animate({opacity:'1'});
					$('#section2 .text_left').addClass('active');
					// $('#section2 .text_right').addClass('active');
					$("#contacts_bottom").animate({opacity:'0'},500);
					$(".scroll-btn").show();
					$('#scrollUp').fadeIn();
					$('#scrollDown').fadeIn();
				}
				if(index == 4){
					$('.section #myVideo').animate({opacity:'0'});
					$('#section3 #myVideo').animate({opacity:'1'});
					$('#section3 .text_slide_right').addClass('active');
					$("#contacts_bottom").animate({opacity:'0'},500);
					$(".scroll-btn").show();
					$('#scrollUp').fadeIn();
					$('#scrollDown').fadeOut();
				}
			},
			onLeave : function (index, nextIndex, direction) {
				$(document).on('click', '#characteristics', function(){
					clb = true;
					$.fn.fullpage.moveTo('characteristics', 0);
					slideIndex2 = 1;
					clb = false;
				});
				$(document).on('click', '#use', function(){
					slideIndex3 = 1;
					clb = true;
					$.fn.fullpage.moveTo('use', 0);
					clb = false;
				});
				if (index == 2 && !sliding && !clb) {
					if($(window).width() > '250' && $(window).width() < '500'){
						if (direction == 'down' && slideIndex2 < 5) {
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && slideIndex2 > 1 ){
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					} else {
						if (direction == 'down' && slideIndex2 < 5 && event.type == 'wheel'){
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && slideIndex2 > 1 && event.type == 'wheel'){
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					}
				} else if (sliding) {
					return false;
				};
				if ( index == 4 && slideIndex3==1){
					$.fn.fullpage.setAllowScrolling(true, 'down');
				}
				if (index == 4 && !sliding && !clb) {
					if (direction == 'down' && slideIndex3 < 3 && event.type == 'wheel') {
						sliding = true;
						$.fn.fullpage.moveSlideRight();
						return false;
					} else if (direction == 'up' && slideIndex3 > 1  && event.type == 'wheel') {
						sliding = true;
						$.fn.fullpage.moveSlideLeft();
						return false;
					}
				} else if (sliding) {
					return false;
				};
			},
			afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
				sliding = false;
			},
			onSlideLeave : function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
				if (index == 2) {
					if (direction == 'right') {
						// sliding = true;
						slideIndex2++;
					}
					if (direction == 'left') {
						// sliding = true;
						slideIndex2--;
					}
				};
				if (index == 4) {
					if (direction == 'right') {
						// sliding = true;
						slideIndex3++;
					}
					if (direction == 'left') {
						// sliding = true;
						slideIndex3--;
					}
					if ( index == 4 && slideIndex == 1){
						$.fn.fullpage.setAllowScrolling(false, 'down');
					}
					if ( index == 4 && slideIndex == 2){
						$.fn.fullpage.setAllowScrolling(true);
					}

				};
				if(index == 4 && slideIndex == 1){
					$("#contacts_bottom").animate({opacity:'1'},500);
					$(".scroll-btn").hide();
				}
			}
		});
	} else {
		$("#characteristics").click(function() {
			$('html, body').animate({
				scrollTop: $("#section1").offset().top
			}, 500);
			$("#menu-icon").click();
		});
		$("#use").click(function() {
			$('html, body').animate({
				scrollTop: $("#section3").offset().top
			}, 500);
			$("#menu-icon").click();
		});
	}
	$('#scrollDown').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$('#scrollUp').click(function(){
		$.fn.fullpage.moveTo('main');
	});

	    // jQuery Smooth anchor plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $('a.page-scroll').click(function(){
    	$('.nav-mob').fadeOut(300);
    })

    $('#scroll-с').click(function(e){
    	e.preventDefault();
    	$('.con-b').addClass('active-cl');
    	$('.nav-mob').fadeOut(300);
    })
    $('#close-cont-b').click(function(e){
    	e.preventDefault();
    	$('.con-b').removeClass('active-cl');
    })
    $('#close-cont-b').click(function(e){
    	e.preventDefault();
    	$('.con-b').removeClass('active-cl');
    })
    $('#close-cont-b').click(function(){
    	$('#contacts_bottom').removeClass('active');
    })
});