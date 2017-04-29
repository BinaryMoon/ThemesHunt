/**
 * Search functionality
 */
var TH_Search = (function() {


	/**
	 * Focus the search input.
	 */
	var focus_search = function() {

		$( '#search-themes input' ).on(
			'focus',
			function() {

				$( this ).parent().addClass( 'active' );

			}
		);

		$( '#search-themes input' ).on(
			'blur',
			function() {

				$( this ).parent().removeClass( 'active' );

			}
		);

	}


	/**
	 * Initialize search settings.
	 */
	var init = function() {

		focus_search();

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
