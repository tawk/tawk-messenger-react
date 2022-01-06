/* global document */
/* eslint-disable no-use-before-define */

/**
 * @param {Object} - Tawk widget required properties 
 */
const loadScript = ({propertyId, widgetId}) => {
	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
};


export {
	loadScript
};