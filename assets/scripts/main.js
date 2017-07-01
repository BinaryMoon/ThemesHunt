---
---
{% include_relative th-smooth-scroll.js %}

{% include_relative th-responsive-iframe.js %}

{% include_relative th-search.js %}

{% include_relative th-typography.js %}

{% include_relative th-theme-list.js %}

;( function( window, document, $ ) {

	'use strict';

	/**
	 * Do all the stuffs.
	 */
	$( document ).ready(
		function() {

			TH_Search.init();
			TH_SmoothScroll.init();
			TH_ThemeList.init();
			TH_ResponsiveIframe.init();
			TH_Typography.init();

		}
	);

} )( window, document, jQuery );
