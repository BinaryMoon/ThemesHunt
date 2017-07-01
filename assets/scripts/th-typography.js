/**
 *
 */
var TH_Typography = (function() {


	/**
	 *
	 */
	var init = function() {

		wrap_theme_images();

	}

	var wrap_theme_images = function() {

		$( '.theme-description p img' ).parent().addClass( 'image' );

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
