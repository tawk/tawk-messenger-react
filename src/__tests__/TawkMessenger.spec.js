/* global document, window */

// Dependecy
import { unmountComponentAtNode } from 'react-dom';
import { render, act } from '@testing-library/react';

// Plugin
import TawkMessengerReact from '../index';


let container = null;
jest.spyOn(window, 'addEventListener');


describe('Tawk-messenger plugin', () => {
	beforeEach(() => {
		container = document.createElement('script');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	describe('Initialize plugin', () => {
		it('should have global variable \'Tawk_API\'', () => {
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_id"
						widgetId="widget_id"/>,
					container
				);
			});
			
			expect(typeof window.Tawk_API === 'object').toBe(true);
		});

		it('should set \'customStyle\' property in \'Tawk_API\'', () => {
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_id"
						widgetId="widget_id"
						customStyle={{}}/>,
					container
				);
			});
			
			expect(typeof window.Tawk_API.customStyle === 'object').toBe(true);
		});
	});

	describe('API', () => {
		it('should set the action functions', () => {
			const tawkMessengerRef = {
				current : {}
			};
	
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_id"
						widgetId="widget_id"
						ref={tawkMessengerRef}/>,
					container
				);
			});
			
			expect(typeof tawkMessengerRef.current.tawkMaximize === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkMinimize === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkToggle === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkPopup === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkShowWidget === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkHideWidget === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkToggleVisibility === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkEndChat === 'function').toBe(true);
		});

		it('should set the getters functions', () => {
			const tawkMessengerRef = {
				current : {}
			};
	
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_id"
						widgetId="widget_id"
						ref={tawkMessengerRef}/>,
					container
				);
			});
			
			expect(typeof tawkMessengerRef.current.tawkGetWindowType === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkGetStatus === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkIsChatMaximized === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkIsChatMinimized === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkIsChatHidden === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkIsChatOngoing === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkIsVisitorEngaged === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkOnLoaded === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkOnBeforeLoaded === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkWidgetPosition === 'function').toBe(true);
		});

		it('should set the event functions', () => {
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_id"
						widgetId="widget_id"/>,
					container
				);
			});
			
			expect(window.addEventListener).toHaveBeenCalledWith('tawkLoad', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkStatusChange', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkBeforeLoad', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMaximized', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMinimized', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatHidden', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatStarted', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatEnded', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkPrechatSubmit', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkOfflineSubmit', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageVisitor', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageAgent', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageSystem', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentJoinChat', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentLeaveChat', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatSatisfaction', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkVisitorNameChanged', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkFileUpload', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkTagsUpdated', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkUnreadCountChanged', expect.any(Function));
		});

		it('should set the setter functions', () => {
			const tawkMessengerRef = {
				current : {}
			};
	
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_id"
						widgetId="widget_id"
						ref={tawkMessengerRef}/>,
					container
				);
			});

			expect(typeof tawkMessengerRef.current.tawkVisitor === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkSetAttributes === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkAddEvent === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkAddTags === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.tawkRemoveTags === 'function').toBe(true);
		});
	});
});