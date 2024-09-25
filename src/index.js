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
	}, []);

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
			embedId : props.embedId,
			basePath : props.basePath
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
		tawkMaximize : () => { 
			return window.Tawk_API.maximize();
		},

		tawkMinimize : () => {
			return window.Tawk_API.minimize();
		},

		tawkToggle : () => {
			return window.Tawk_API.toggle();
		},

		tawkPopup : () => {
			return window.Tawk_API.popup();
		},

		tawkShowWidget : () => {
			return window.Tawk_API.showWidget();
		},

		tawkHideWidget : () => {
			return window.Tawk_API.hideWidget();
		},

		tawkToggleVisibility : () => {
			return window.Tawk_API.toggleVisibility();
		},

		tawkEndChat : () => {
			return window.Tawk_API.endChat();
		},

		
		/**
		 * API for returning a data
		 */
		tawkGetWindowType : () => {
			return window.Tawk_API.getWindowType();
		},

		tawkGetStatus : () => {
			return window.Tawk_API.getStatus();
		},

		tawkIsChatMaximized : () => {
			return window.Tawk_API.isChatMaximized();
		},

		tawkIsChatMinimized : () => {
			return window.Tawk_API.isChatMinimized();
		},

		tawkIsChatHidden : () => {
			return window.Tawk_API.isChatHidden();
		},

		tawkIsChatOngoing : () => {
			return window.Tawk_API.isChatOngoing();
		},

		tawkIsVisitorEngaged : () => {
			return window.Tawk_API.isVisitorEngaged();
		},

		tawkOnLoaded : () => {
			return window.Tawk_API.onLoaded;
		},

		tawkOnBeforeLoaded : () => {
			return window.Tawk_API.onBeforeLoaded;
		},

		tawkWidgetPosition : () => {
			return window.Tawk_API.widgetPosition();
		},


		/**
		 * API for setting a data on the widget
		 */
		tawkVisitor : (data) => {
			window.Tawk_API.visitor = data;
		},

		tawkSetAttributes : (attribute, callback) => {
			window.Tawk_API.setAttributes(attribute, callback);
		},

		tawkAddEvent : (event, metadata, callback) => {
			window.Tawk_API.addEvent(event, metadata, callback);
		},

		tawkAddTags : (tags, callback) => {
			window.Tawk_API.addTags(tags, callback);
		},

		tawkRemoveTags : (tags, callback) => {
			window.Tawk_API.removeTags(tags, callback);
		}
	}));

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	const mapCallbacks = () => {
		window.addEventListener('tawkLoad', () => {
			props.tawkOnLoad();
		});

		window.addEventListener('tawkStatusChange', (status) => {
			props.tawkOnStatusChange(status.detail);
		});

		window.addEventListener('tawkBeforeLoad', () => {
			props.tawkOnBeforeLoad();
		});

		window.addEventListener('tawkChatMaximized', () => {
			props.tawkOnChatMaximized();
		});

		window.addEventListener('tawkChatMinimized', () => {
			props.tawkOnChatMinimized();
		});

		window.addEventListener('tawkChatHidden', () => {
			props.tawkOnChatHidden();
		});

		window.addEventListener('tawkChatStarted', () => {
			props.tawkOnChatStarted();
		});

		window.addEventListener('tawkChatEnded', () => {
			props.tawkOnChatEnded();
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			props.tawkOnPrechatSubmit(data.detail);
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			props.tawkOnOfflineSubmit(data.detail);
		});
		
		window.addEventListener('tawkChatMessageVisitor', (message) => {
			props.tawkOnChatMessageVisitor(message.detail);
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			props.tawkOnChatMessageAgent(message.detail);
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			props.tawkOnChatMessageSystem(message.detail);
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			props.tawkOnAgentJoinChat(data.detail);
		});
		
		window.addEventListener('tawkAgentLeaveChat', (data) => {
			props.tawkOnAgentLeaveChat(data.detail);
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			props.tawkOnChatSatisfaction(satisfaction.detail);
		});
		
		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			props.tawkOnVisitorNameChanged(visitorName.detail);
		});

		window.addEventListener('tawkFileUpload', (link) => {
			props.tawkOnFileUpload(link.detail);
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			props.tawkOnTagsUpdated(data.detail);
		});

		window.addEventListener('tawkUnreadCountChanged', (data) => {
			props.tawkOnUnreadCountChanged(data.detail);
		});
	};

	return null;
});

TawkMessenger.displayName = 'TawkMessenger';

TawkMessenger.defaultProps = {
	customStyle : null,
	embedId : '',
	basePath : 'tawk.to',
	tawkOnLoad : () => {},
	tawkOnStatusChange : () => {},
	tawkOnBeforeLoad : () => {},
	tawkOnChatMaximized : () => {},
	tawkOnChatMinimized : () => {},
	tawkOnChatHidden : () => {},
	tawkOnChatStarted : () => {},
	tawkOnChatEnded : () => {},
	tawkOnPrechatSubmit : () => {},
	tawkOnOfflineSubmit : () => {},
	tawkOnChatMessageVisitor : () => {},
	tawkOnChatMessageAgent : () => {},
	tawkOnChatMessageSystem : () => {},
	tawkOnAgentJoinChat : () => {},
	tawkOnAgentLeaveChat : () => {},
	tawkOnChatSatisfaction : () => {},
	tawkOnVisitorNameChanged : () => {},
	tawkOnFileUpload : () => {},
	tawkOnTagsUpdated : () => {},
	tawkOnUnreadCountChanged : () => {}
};


TawkMessenger.propTypes = {
	/**
	 * Default properties
	 */
	propertyId : PropTypes.string.isRequired,
	widgetId : PropTypes.string.isRequired,

	/**
	 * Optional properties
	 */
	customStyle : PropTypes.object,
	embedId : PropTypes.string,
	basePath : PropTypes.string,

	/**
	 * Callbacks
	 */
	tawkOnLoad : PropTypes.func,
	tawkOnStatusChange : PropTypes.func,
	tawkOnBeforeLoad : PropTypes.func,
	tawkOnChatMaximized : PropTypes.func,
	tawkOnChatMinimized : PropTypes.func,
	tawkOnChatHidden : PropTypes.func,
	tawkOnChatStarted : PropTypes.func,
	tawkOnChatEnded : PropTypes.func,
	tawkOnPrechatSubmit : PropTypes.func,
	tawkOnOfflineSubmit : PropTypes.func,
	tawkOnChatMessageVisitor : PropTypes.func,
	tawkOnChatMessageAgent : PropTypes.func,
	tawkOnChatMessageSystem : PropTypes.func,
	tawkOnAgentJoinChat : PropTypes.func,
	tawkOnAgentLeaveChat : PropTypes.func,
	tawkOnChatSatisfaction : PropTypes.func,
	tawkOnVisitorNameChanged : PropTypes.func,
	tawkOnFileUpload : PropTypes.func,
	tawkOnTagsUpdated : PropTypes.func,
	tawkOnUnreadCountChanged : PropTypes.func
};


export default TawkMessenger;