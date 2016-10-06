'use strict';


$(document).ready(function() {
	
	$(".bg-item--intro").css("height", "100%");
	$(".bg-item--intro").css("width", "100%");
	$(".bg-item--intro").fadeIn(1000);
});

// =============== Main Module ===============

;(function() {

	var bgList    = $('.bg-list'),
		currentBg = bgList.find('.bg-item--intro'),
		nextBg,

		sections  = $('.section'),
		nextSectionName,
		nextSection,
		currentSection,

		nav      = $('.nav'),
		navLinks = nav.find('.nav__link');

	function render() {
		nextSection = sections.filter('.' + nextSectionName);
		nextBg = bgList.find('.bg-item--' + nextSectionName);

		if (currentSection) {
			currentSection.slideUp(400);
		}
		setTimeout(function() {
			currentBg.animate({
				'height': 0
			}, function() {
				nextBg.css('display', 'block');
				nextBg.animate({
					'width': '100%',
					'height': '100%'
				}, function() {
					if (nextSectionName === 'intro') { nav.removeClass('nav--aside').addClass('nav--center') }
					currentSection = nextSection;
					nextSection.slideDown(400, function() {

					});
				});
			});
			currentBg = nextBg;
		}, 400);
	}


	function setupListeners() {
		navLinks.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.hasClass('nav__link--active')) { return }

			nextSectionName = $(this).attr('href').substring(1);

			if (!(nextSectionName === 'intro')) {
				nav.removeClass('nav--center').addClass('nav--aside');
			}

			navLinks.filter('.nav__link--active').removeClass('nav__link--active');
			$this.addClass('nav__link--active');
			render();
		});
	}

	setupListeners()
}());


// //  ========== Page Transitions Module ==========

// var pageTransition = (function() {

// 	var sections  = $('.section'),
// 		nextSectionName,
// 		currentSection,
// 		currentBg;

	// function changeBackground() {
	// 	// Define Nodes
	// 	if (!currentBg) { currentBg = $('.bg-item--intro') }
	// 	var nextBg    = $('.bg-item--' + nextSectionName);

	// 	hideSection();
	// 	setTimeout(function() {
	// 		currentBg.animate({
	// 			'height': 0
	// 		}, function() {
	// 			nextBg.css('display', 'block');
	// 			nextBg.animate({
	// 				'width': '100%',
	// 				'height': '100%'
	// 			}, function() {
	// 				showSection();
	// 			});
	// 		});
	// 		currentBg = nextBg;
	// 	}, 400)
	// }

// 	function showSection() {
// 	var nextSection = sections.filter('.' + nextSectionName); 
// 		nextSection.slideDown(400);
// 		currentSection = nextSection;
// 	}

// 	function hideSection() {
// 		if(currentSection) {
// 			currentSection.slideUp(400);
// 		}
// 	}
	
// 	function init(sectionName) {
// 		nextSectionName = sectionName;
// 		changeBackground();
// 	}

// 	return {'init': init}

// }());

// // //  ========== Navigation Module ==========

// ;(function() {

// 	var nav      = $('.nav'),
// 		navLinks = nav.find('.nav__link');

// 	function _setupListeners() {
// 		navLinks.on('click', function(e) {
// 			e.preventDefault();
// 			// if (!nav.hasClass('nav--active')) {
// 			// 	nav.addClass('nav--active');
// 			// }
// 			var $this = $(this),
// 				targetSectionName = $(this).attr('href').substring(1);

// 			if (!(targetSectionName === 'intro')) {
// 				nav.addClass('nav--aside');
// 			} else {
// 				console.log(targetSectionName);
// 				nav.removeClass('nav--aside');
// 			}

// 			navLinks.filter('.nav__link--active').removeClass('nav__link--active');
// 			$this.addClass('nav__link--active');
// 			pageTransition.init(targetSectionName);
// 		});
// 	}

// 	_setupListeners();

// }());
