declare module 'tawk-messenger-react' {
	import type React from 'react';

	export type TawkAPI = {
		/**
		 * API for calling an action on the widget
		 */
		maximize : Function,
		minimize : Function,
		toggle : Function,
		popup : Function,
		showWidget : Function,
		hideWidget : Function,
		toggleVisibility : Function,
		endChat : Function,

		/**
		 * API for returning a data
		 */
		visitor : {
			name : string,
			email : string
		},
		setAttributes : (
			attributes : Record<string, string | number>,
			callback? : (error : string) => void
		) => any,
		addEvent : (
			event : string,
			metadata? : object,
			callback? : (error : string) => void
		) => any,
		addTags : (
			tags : string[],
			callback? : (error : string) => void
		) => any,
		removeTags : (
			tags : string[],
			callback? : (error : string) => void
		) => any,

		/**
		 * API for listening an event emitting
		 * inside of the widget
		 */
		onLoad : Function,
		onStatusChange : (status : string) => void,
		onBeforeLoad : Function,
		onChatMaximized : Function,
		onChatMinimized : Function,
		onChatHidden : Function,
		onChatStarted : Function,
		onChatEnded : Function,
		onPrechatSubmit : (data : object) => void,
		onOfflineSubmit : (data : object) => void,
		onChatMessageVisitor : (message : object) => void,
		onChatMessageAgent : (message : object) => void,
		onChatMessageSystem : (message : object) => void,
		onAgentJoinChat : (data : object) => void,
		onAgentLeaveChat : (data : object) => void,
		onChatSatisfaction : (satisfaction : number) => void,
		onVisitorNameChanged : (visitorName : string) => void,
		onFileUpload : (link : string) => void,
		onTagsUpdated : (data : string[]) => void,
		onUnreadCountChanged : (count : number) => void,
	};

	interface TawkMessengerProps {
		propertyId : string;
		widgetId : string;
		embedId? : string;
		customStyle? : object;

		/**
		 * Callbacks
		 */
		onLoad? : Function;
		onStatusChange? : (status : string) => void;
		onBeforeLoad? : Function;
		onChatMaximized? : Function;
		onChatMinimized? : Function;
		onChatHidden? : Function;
		onChatStarted? : Function;
		onChatEnded? : Function;
		onPrechatSubmit? : (data : object) => void;
		onOfflineSubmit? : (data : object) => void;
		onChatMessageVisitor? : (message : object) => void;
		onChatMessageAgent? : (message : object) => void;
		onChatMessageSystem? : (message : object) => void;
		onAgentJoinChat? : (data : object) => void;
		onAgentLeaveChat? : (data : object) => void;
		onChatSatisfaction? : (satisfaction : number) => void;
		onVisitorNameChanged? : (visitorName : string) => void;
		onFileUpload? : (link : string) => void;
		onTagsUpdated? : (data : string[]) => void;
		onUnreadCountChanged? : (count : number) => void;
		ref? : React.Ref<TawkAPI>;
	}

	const TawkMessenger : React.SFC<TawkMessengerProps>;
	export default TawkMessenger;
}
