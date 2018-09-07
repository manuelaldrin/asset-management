( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
			this.slickFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		slickFunction: function(){
  
			$('.slideshow-holder').slick({
			  infinite: true, 
			  slidesToShow: 1, 
			  slidesToScroll: 1, 
			  arrows: false, 
			  autoplay: true, 
			  fade: true,
			  autoplaySpeed: 1500, 
			  dots: true,
			  cssEase: 'linear',
			  speed: 1500
			});

		
		}


	} 

	$(document).ready( function() {
		app.init();

		

		// $(".main").onepage_scroll({
		// 	sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
		// 	easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
		// 									 // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		// 	animationTime: 1500,             // AnimationTime let you define how long each section takes to animate
		// 	pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		// 	updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		// 	beforeMove: function(index) {
		// 		$('.section-text-bg').css({'height':'100%'});
		// 	},  // This option accepts a callback function. The function will be called before the page moves.
		// 	afterMove: function(index) {
				
		// 	},   // This option accepts a callback function. The function will be called after the page moves.
		// 	loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		// 	keyboard: true,                  // You can activate the keyboard controls
		// 	responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
		// 									 // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
		// 									 // the browser's width is less than 600, the fallback will kick in.
		// 	direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
		//  });

		//  $('.js-tilt').tilt({
		// 	maxTilt:        2,
		// 	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
		// 	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
		// 	scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
		// 	speed:          500,    // Speed of the enter/exit transition.
		// 	transition:     true,   // Set a transition on enter/exit.
		// 	disableAxis:    null,   // What axis should be disabled. Can be X or Y.
		// 	reset:          true,   // If the tilt effect has to be reset on exit.
		// 	glare:          false,  // Enables glare effect
		// 	maxGlare:       1       // From 0 - 1.
		// })
		if($('body').hasClass('residential-page')){
			$.scrollify({
				section : ".section",
				// sectionName : "section-name",
				interstitialSection : "",
				easing: "easeOutExpo",
				scrollSpeed: 1500,
				offset : 0,
				scrollbars: true,
				standardScrollElements: "",
				setHeights: true,
				overflowScroll: true,
				updateHash: true,
				touchScroll:true,
				before:function() {
					$('body').find('.active-section').removeClass('active-section');
					$.scrollify.current().addClass('active-section');
					setTimeout(function(){
						$('.active-section .section-text-bg').css({'height':'100%'});
					},1000);
					
					if($('.resi-section-infographics').hasClass('active-section')){
						setTimeout(function(){
							$('.inforgraphics-item-1 .infographics-border').css({'opacity':'1'});
							$('.inforgraphics-item-1 .counter').counterUp({
								delay: 10,
								time: 1000
							});
						},500);

						setTimeout(function(){
							$('.inforgraphics-item-2 .infographics-border').css({'opacity':'1'});
							$('.inforgraphics-item-2 .counter').counterUp({
								delay: 10,
								time: 1000
							});
						},1000);

						setTimeout(function(){
							$('.inforgraphics-item-3 .infographics-border').css({'opacity':'1'});
							$('.inforgraphics-item-3 .counter').counterUp({
								delay: 10,
								time: 1000
							});
						},1500);

					}else{
						$('.infographics-border').css({'opacity':'0'});
					}

				},
				after:function() {
					
				},
				afterResize:function() {},
				afterRender:function() {}
			});
		}

		if($('body').hasClass('property-page')){
			$(".property-entry-title").paroller({ factor: -1, factorXs: -0.2, type: 'foreground', direction: 'horizontal' });

			$(".property-desc").paroller({ factor: 1, factorXs: 0.2, type: 'foreground', direction: 'horizontal' });

			$(".property-slogan").paroller({ factor: 1, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

			
		}


	});
		

	$(window).load(function () { 
		
	});

	$(window).resize(function () { 

	});

	$(window).scroll(function() {
		// var scroll = $(window).scrollTop();
		// $(".zoom").css({
		// 	backgroundSize: (-200 + scroll/6)  + "%",
		// 	top: -(scroll/10)  + "%",			
		// });

		// var scroll = $(window).scrollTop();
		// console.log(scroll);
		// if( 1879 < scroll){
		// 	$('.resi-section-2-wrap').addClass('fixed-section');
		// }

		// if( 1879  < scroll){
		// 		$('.resi-parallax-photo').css('position','fixed').css({
		// 			'top':'0', 
		// 			'width':'100%'
		// 		});
		// } else {
		// 	$('.resi-parallax-photo').css('position','relative');
		// }   
	});
	
})(jQuery);


