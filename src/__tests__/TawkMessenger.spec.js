// Dependecy
import React from 'react';
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
	})

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
            
            expect(typeof tawkMessengerRef.current.maximize === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.minimize === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.toggle === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.popup === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.showWidget === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.hideWidget === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.toggleVisibility === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.endChat === 'function').toBe(true);
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
            
            expect(typeof tawkMessengerRef.current.getWindowType === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.getStatus === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.isChatMaximized === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.isChatMinimized === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.isChatHidden === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.isChatOngoing === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.isVisitorEngaged === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.onLoaded === 'function').toBe(true);
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

			expect(typeof tawkMessengerRef.current.visitor === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.setAttributes === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.addEvent === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.addTags === 'function').toBe(true);
			expect(typeof tawkMessengerRef.current.removeTags === 'function').toBe(true);
		});
    });
});