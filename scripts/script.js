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
			  dots: false,
			  cssEase: 'linear',
			  speed: 1500
			});

		
		}


	} 

	$(document).ready( function() {
		app.init();

		$('.mobile-menu').click(function(e){
			e.preventDefault();
	        $('.mobile-nav-wrap').slideToggle("slow");
	    });

		$('.arrow-down-icon').click(function(){ 
		    $("html, body").animate({ 
		      scrollTop: $('.resi-section-1-wrap').offset().top 
		    }, "slow"); 
		})

		$('.slideshow-btn a').click(function(){ 
		    $("html, body").animate({ 
		      scrollTop: $('.cta-wrap').offset().top - 150
		    }, "slow"); 
		})

		

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

			$('.rcb1').click(function(){
				var text = $(this).text();
				$('.resi-contact-form #txtBackground').text('');
				$('.resi-contact-form #txtBackground').text(text);
			})

			$('.rcb2').click(function(){
				var text = $(this).text();
				$('.resi-contact-form #txtBackground').text('');
				$('.resi-contact-form #txtBackground').text(text);
			})

			$.fn.isOnScreen = function(){
    
			    var win = $(window);
			    
			    var viewport = {
			        top : win.scrollTop(),
			        left : win.scrollLeft()
			    };
			    viewport.right = viewport.left + win.width();
			    viewport.bottom = viewport.top + win.height();
			    
			    var bounds = this.offset();
			    bounds.right = bounds.left + this.outerWidth();
			    bounds.bottom = bounds.top + this.outerHeight();
			    
			    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
			    
			};

			$(window).scroll(function(){
				if($('.footer-wrap').isOnScreen() == true){
					$('.scroll-up-wrap').fadeIn();
					$('.scroll-down-wrap').fadeOut();
				}else{
					$('.scroll-up-wrap').fadeOut();
					$('.scroll-down-wrap').fadeIn();
				}
			})

			$('.video-main video').css({'opacity':'1'});
			

			if($(window).width() < 992){
				$.scrollify.destroy();
			} else {

				$.scrollify({
					section : ".section",
					// sectionName : "section-name",
					interstitialSection : "footer",
					easing: "easeOutExpo",
					scrollSpeed: 800,
					offset : 0,
					scrollbars: true,
					standardScrollElements: "",
					setHeights: true,
					overflowScroll: true,
					updateHash: true,
					touchScroll:true,
					before:function(i,panels) {
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

						var ref = panels[i].attr("data-section-name");

					      $(".resi-pagination .active").removeClass("active");

					      $(".resi-pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

					},
					after:function() {
						
					},
					afterResize:function() {},
					afterRender:function() {
					var pagination = "<ul class=\"resi-pagination\">";
				    var activeClass = "";
				    $(".section").each(function(i) {
				        activeClass = "";
				        if(i===0) {
				          activeClass = "active";
				        }
				        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
				    });

				    pagination += "</ul>";

				    $(".main").append(pagination);
				      /*

				      Tip: The two click events below are the same:

				      $(".pagination a").on("click",function() {
				        $.scrollify.move($(this).attr("href"));
				      });

				      */
				    $(".resi-pagination a").on("click",$.scrollify.move);

					}
				});

			}

		}

		if($('body').hasClass('property-page')){
			// $(".property-entry-title").paroller({ factor: -1, factorXs: -0.2, type: 'foreground', direction: 'horizontal' });

			// $(".property-desc").paroller({ factor: 1, factorXs: 0.2, type: 'foreground', direction: 'horizontal' });

			// $(".property-slogan").paroller({ factor: 1, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

			
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


