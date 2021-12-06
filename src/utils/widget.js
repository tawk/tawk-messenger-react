/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

/**
 * @param {Object} - Tawk widget required properties 
 */
const loadScript = ({propertyId, widgetId}) => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.talk.lv/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
};


export {
    loadScript
}