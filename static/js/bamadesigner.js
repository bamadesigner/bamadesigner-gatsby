const elements = {
	navToggle: '',
	navWrapper: '',
};

if ('loading' === document.readyState) {
	// The DOM has not yet been loaded.
	document.addEventListener('DOMContentLoaded', initPage);
} else {
	// The DOM has already been loaded.
	initPage();
}

function getElementNavWrapper() {
	if (elements.navWrapper) {
		return elements.navWrapper;
	}
	elements.navWrapper = document.querySelector('.site-nav-wrapper');
	return elements.navWrapper;
}

function getElementNavToggle() {
	if (elements.navToggle) {
		return elements.navToggle;
	}
	elements.navToggle = document.querySelector('.site-nav-toggle');
	return elements.navToggle;
}

function initPage() {

	// Toggle menu when click.
	getElementNavToggle().addEventListener('click', (e) => {
		toggleMenu();
	})
}

function toggleMenu() {
	if (getElementNavWrapper().classList.contains('open')) {
		closeMenu();
	} else {
		openMenu();
	}
}

function closeMenu() {
	let navWrapper = getElementNavWrapper();

	document.documentElement.classList.remove('site-nav-open');

	// TODO: Only give focus with keyboard?
	navWrapper.classList.remove('open');
	getElementNavToggle().focus();

	navWrapper.removeEventListener('keydown', menuKeydown);
}

function openMenu() {
	let navWrapper = getElementNavWrapper(),
		navToggle = getElementNavToggle();

	document.documentElement.classList.add('site-nav-open');

	// TODO: Only give focus with keyboard?
	navWrapper.classList.add('open');
	navToggle.focus();

	navWrapper.addEventListener('keydown', menuKeydown);
}

function menuKeydown(e) {

	switch (e.keyCode) {

		// ESC
		case 27:
			closeMenu();
			break;

		// TAB
		case 9:
			let navWrapper = getElementNavWrapper(),
				focusableChildren = navWrapper.querySelectorAll('a,button');

			if (!focusableChildren) {
				break;
			}

			let firstFocusableChild = focusableChildren[0],
				lastFocusableChild = focusableChildren[focusableChildren.length - 1];

			if (e.shiftKey) {
				if (e.target === firstFocusableChild) {
					e.preventDefault();
					lastFocusableChild.focus();
				}
			} else {
				if (e.target === lastFocusableChild) {
					e.preventDefault();
					firstFocusableChild.focus();
				}
			}
			break;

		default:
			break;
	}
}

// @TODO Remove jQuery
// TODO: Update so phrases are tied to instance of hiRoy class. Remove repeating code.

//// HI ROY ////

// Will hold the string being typed.
/*var user_key_string = '';

// Get the Roy phrases.
var show_roy_phrase = '7273827989'; // Hi Roy
var hide_roy_phrase = '668969827989'; // Bye Roy

// Get the Shawn phrases.
var show_shawn_phrase = '72738372658778'; // Hi Shawn
var hide_shawn_phrase = '6689698372658778'; // Bye Shawn

// Bye everyone
var bye_all_phrase = '6689696969'; // Byeee

// Will hold Roy and Shawn.
var $hi_roy = undefined;
var hi_roy_present = false;
var $hi_shawn = undefined;
var hi_shawn_present = false;

// If we have a show phrase...
if (show_roy_phrase || show_shawn_phrase) {

	// Track when the user types.
	document.addEventListener('keyup', function (event) {

		// Only do it on the body element.
		if ('body' != event.target.tagName.toLowerCase()) {
			return false;
		}

		// Make sure we have a key code from their keystroke.
		if (!(event.which !== undefined && event.which > 0)) {
			return false;
		}

		// Add to the test string.
		user_key_string += event.which;

		// If we're hiding everyone.
		if (bye_all_phrase && user_key_string === bye_all_phrase) {

			// Move Roy out.
			if ($hi_roy) {
				$hi_roy.moveOut(function () {
					$hi_roy.destroy();
				});
			}

			// Move Shawn out.
			if ($hi_shawn) {
				$hi_shawn.moveOut(function () {
					$hi_shawn.destroy();
				});
			}
		}

		// If the user phrase string equals the show Roy phrase.
		else if (user_key_string === show_roy_phrase) {
			user_key_string = '';

			// Move out the current Roy.
			if (hi_roy_present) {
				$hi_roy.moveOut(function () {

					// Replace Roy.
					$hi_roy = $('body').hiRoy({
						moveOnMove: false,
						image: bamadesigner.dir + '/hi-roy/roy-head.png'
					});
				});
			} else {

				// Hi Roy.
				hi_roy_present = true;
				$hi_roy = $('body').hiRoy({
					moveOnMove: false,
					image: bamadesigner.dir + '/hi-roy/roy-head.png'
				});
			}
		}

		// If the user phrase string equals the show Shawn phrase.
		else if (user_key_string === show_shawn_phrase) {
			user_key_string = '';

			// Move out the current Shawn.
			if (hi_shawn_present) {
				$hi_shawn.moveOut(function () {

					// Replace Shawn.
					$hi_shawn = $('body').hiRoy({
						id: 'hi-shawn',
						moveOnMove: false,
						image: bamadesigner.dir + '/hi-roy/shawn-head.png',
						link: 'https://twitter.com/intent/tweet?text=Hi+@ShawnHooper.+http%3A%2F%2Fhiroy.club%2F&hashtags=hiroy',
					});
				});
			} else {

				// Hi Shawn.
				hi_shawn_present = true;
				$hi_shawn = $('body').hiRoy({
					id: 'hi-shawn',
					moveOnMove: false,
					image: bamadesigner.dir + '/hi-roy/shawn-head.png',
					link: 'https://twitter.com/intent/tweet?text=Hi+@ShawnHooper.+http%3A%2F%2Fhiroy.club%2F&hashtags=hiroy',
				});
			}
		}

		// If the user phrase string equals the hide Roy phrase.
		else if (hide_roy_phrase && user_key_string === hide_roy_phrase) {
			user_key_string = '';

			// Move Roys out.
			*//*$.each($hi_roys,function($index,$item){
			$item.moveOut(function(){
			$item.destroy();
			});
			});

			// Clear out the Roys.
			$hi_roys = [];*//*

			// Move Roy out.
			if ($hi_roy) {
				$hi_roy.moveOut(function () {
					$hi_roy.destroy();
				});
			}
		}

		// If the user phrase string equals the hide Shawn phrase.
		else if (hide_shawn_phrase && user_key_string === hide_shawn_phrase) {
			user_key_string = '';

			// Move Shawns out
			*//*$.each($hi_shawns,function($index,$item){
				$item.moveOut(function(){
					$item.destroy();
				});
			});
			
			// Clear out the Shawns
			$hi_shawns = [];*//*

			// Move Shawn out.
			if ($hi_shawn) {
				$hi_shawn.moveOut(function () {
					$hi_shawn.destroy();
				});
			}
		}

		// It it doesn't match either phrase starting from the beginning, then start over.
		else if ((0 != show_roy_phrase.search(user_key_string) && (!hide_roy_phrase || (0 != hide_roy_phrase.search(user_key_string))))
			&& (0 != show_shawn_phrase.search(user_key_string) && (!hide_shawn_phrase || (0 != hide_shawn_phrase.search(user_key_string))))
			&& (0 != bye_all_phrase.search(user_key_string) && (!bye_all_phrase || (0 != bye_all_phrase.search(user_key_string))))
		) {
			user_key_string = '';
		}
	});
}*/
