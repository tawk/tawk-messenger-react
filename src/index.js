/* global window, document */

// Dependencies
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

// Helper
import { isValidString } from './utils/helper';
import { loadScript } from './utils/widget';

const TawkMessenger = forwardRef((props, ref) => {
	useEffect(() => {
		load();
	});

	const load = () => {
		if (!isValidString(props.propertyId)) {
			console.error('[Tawk-messenger-react warn]: You didn\'t specified \'propertyId\' property in the plugin.');
			return;
		}
	
		if (!isValidString(props.widgetId)) {
			console.error('[Tawk-messenger-react warn]: You didn\'t specified \'widgetId\' property in the plugin.');
			return;
		}

		if (!window || !document) {
			return;
		}

		init();
	};

	const init = () => {
		/**
		 * Set placeholder
		 */
		window.Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = new Date();

		/**
		 * Inject the Tawk script
		 */
		loadScript({
			propertyId : props.propertyId,
			widgetId : props.widgetId,
			embedId : props.embedId
		});

		/**
		 * Set custom style
		 */
		if (props.customStyle && typeof props.customStyle === 'object') {
			window.Tawk_API.customStyle = props.customStyle;
		}

		mapCallbacks();
	};
	
	useImperativeHandle(ref, () => ({
		/**
		 * API for calling an action on the widget
		 */
		maximize : () => { 
			return window.Tawk_API.maximize();
		},

		minimize : () => {
			return window.Tawk_API.minimize();
		},

		toggle : () => {
			return window.Tawk_API.toggle();
		},

		popup : () => {
			return window.Tawk_API.popup();
		},

		showWidget : () => {
			return window.Tawk_API.showWidget();
		},

		hideWidget : () => {
			return window.Tawk_API.hideWidget();
		},

		toggleVisibility : () => {
			return window.Tawk_API.toggleVisibility();
		},

		endChat : () => {
			return window.Tawk_API.endChat();
		},

		
		/**
		 * API for returning a data
		 */
		getWindowType : () => {
			return window.Tawk_API.getWindowType();
		},

		getStatus : () => {
			return window.Tawk_API.getStatus();
		},

		isChatMaximized : () => {
			return window.Tawk_API.isChatMaximized();
		},

		isChatMinimized : () => {
			return window.Tawk_API.isChatMinimized();
		},

		isChatHidden : () => {
			return window.Tawk_API.isChatHidden();
		},

		isChatOngoing : () => {
			return window.Tawk_API.isChatOngoing();
		},

		isVisitorEngaged : () => {
			return window.Tawk_API.isVisitorEngaged();
		},

		onLoaded : () => {
			return window.Tawk_API.onLoaded;
		},


		/**
		 * API for setting a data on the widget
		 */
		visitor : (data) => {
			window.Tawk_API.visitor = data;
		},

		setAttributes : (attribute, callback) => {
			window.Tawk_API.setAttributes(attribute, callback);
		},

		addEvent : (event, metadata, callback) => {
			window.Tawk_API.addEvent(event, metadata, callback);
		},

		addTags : (tags, callback) => {
			window.Tawk_API.addTags(tags, callback);
		},

		removeTags : (tags, callback) => {
			window.Tawk_API.removeTags(tags, callback);
		}
	}));

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	const mapCallbacks = () => {
		window.addEventListener('tawkLoad', () => {
			props.onLoad();
		});

		window.addEventListener('tawkStatusChange', (status) => {
			props.onStatusChange(status.detail);
		});

		window.addEventListener('tawkBeforeLoad', () => {
			props.onBeforeLoad();
		});

		window.addEventListener('tawkChatMaximized', () => {
			props.onChatMaximized();
		});

		window.addEventListener('tawkChatMinimized', () => {
			props.onChatMinimized();
		});

		window.addEventListener('tawkChatHidden', () => {
			props.onChatHidden();
		});

		window.addEventListener('tawkChatStarted', () => {
			props.onChatStarted();
		});

		window.addEventListener('tawkChatEnded', () => {
			props.onChatEnded();
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			props.onPrechatSubmit(data.detail);
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			props.onOfflineSubmit(data.detail);
		});
		
		window.addEventListener('tawkChatMessageVisitor', (message) => {
			props.onChatMessageVisitor(message.detail);
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			props.onChatMessageAgent(message.detail);
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			props.onChatMessageSystem(message.detail);
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			props.onAgentJoinChat(data.detail);
		});
		
		window.addEventListener('tawkAgentLeaveChat', (data) => {
			props.onAgentLeaveChat(data.detail);
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			props.onChatSatisfaction(satisfaction.detail);
		});
		
		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			props.onVisitorNameChanged(visitorName.detail);
		});

		window.addEventListener('tawkFileUpload', (link) => {
			props.onFileUpload(link.detail);
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			props.onTagsUpdated(data.detail);
		});
	};

	return null;
});

TawkMessenger.displayName = 'TawkMessenger';

TawkMessenger.defaultProps = {
	customStyle : null,
	onLoad : () => {},
	onStatusChange : () => {},
	onBeforeLoad : () => {},
	onChatMaximized : () => {},
	onChatMinimized : () => {},
	onChatHidden : () => {},
	onChatStarted : () => {},
	onChatEnded : () => {},
	onPrechatSubmit : () => {},
	onOfflineSubmit : () => {},
	onChatMessageVisitor : () => {},
	onChatMessageAgent : () => {},
	onChatMessageSystem : () => {},
	onAgentJoinChat : () => {},
	onAgentLeaveChat : () => {},
	onChatSatisfaction : () => {},
	onVisitorNameChanged : () => {},
	onFileUpload : () => {},
	onTagsUpdated : () => {}
};


TawkMessenger.propTypes = {
	/**
	 * Default properties
	 */
	propertyId : PropTypes.string.isRequired,
	widgetId : PropTypes.string.isRequired,

	/**
	 * Custom style
	 */
	customStyle : PropTypes.object,

	/**
	 * Callbacks
	 */
	onLoad : PropTypes.func,
	onStatusChange : PropTypes.func,
	onBeforeLoad : PropTypes.func,
	onChatMaximized : PropTypes.func,
	onChatMinimized : PropTypes.func,
	onChatHidden : PropTypes.func,
	onChatStarted : PropTypes.func,
	onChatEnded : PropTypes.func,
	onPrechatSubmit : PropTypes.func,
	onOfflineSubmit : PropTypes.func,
	onChatMessageVisitor : PropTypes.func,
	onChatMessageAgent : PropTypes.func,
	onChatMessageSystem : PropTypes.func,
	onAgentJoinChat : PropTypes.func,
	onAgentLeaveChat : PropTypes.func,
	onChatSatisfaction : PropTypes.func,
	onVisitorNameChanged : PropTypes.func,
	onFileUpload : PropTypes.func,
	onTagsUpdated : PropTypes.func
};


export default TawkMessenger;