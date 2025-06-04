/* global document, window */
/* eslint-disable no-use-before-define */

/**
 * @param {Object} - Tawk widget required properties 
 */
const loadScript = ({propertyId = '', widgetId = '', embedId = '', basePath = 'tawk.to', autoStart = true}) => {
	if (embedId.length) {
		/**
		 * If the element with embedId as id we will create a new clement
		 */
		if (!document.getElementById(embedId)) {
			const element = document.createElement('div');
			element.id = embedId;
	
			document.body.appendChild(element);
		}

		window.Tawk_API.embedded = embedId;
	}

	if (!autoStart) {
		window.Tawk_API.autoStart = autoStart;
	}

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
};


export {
	loadScript
};