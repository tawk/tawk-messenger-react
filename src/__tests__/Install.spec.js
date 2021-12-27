// Dependecy
import { unmountComponentAtNode } from 'react-dom';
import { render, act } from '@testing-library/react'

// Plugin
import TawkMessengerReact from '../index';


let container = null;
jest.spyOn(console, 'error').mockReturnValue(true);


describe('Install tawk-messenger-react', () => {
	beforeEach(() => {
		container = document.createElement('script');
		document.body.appendChild(container);
	})

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	describe('Should throw an error in missing required properties', () => {
		it('when propertyId and widgetId are not defined', () => {
			act(() => {
				render(<TawkMessengerReact/>, container);
			})

			/**
			 * 1st error - PropType 'propertyId' is required
			 * 2nd error - PropType 'widgetId' is required
			 * 3rd error - Custom log from load()
			 */
			expect(console.error).toHaveBeenCalledTimes(3);
		});

		it('when widgetId only is not defined', () => {
			act(() => {
				render(
					<TawkMessengerReact
						propertyId="property_Id"/>,
					container
				);
			})

			/**
			 * 1st error - PropType 'widgetId' is required
			 */
			expect(console.error).toHaveBeenCalledTimes(1);
		});

		it('when propertId only is not defined', () => {
			act(() => {
				render(
					<TawkMessengerReact
						widgetId="widget_id"/>,
					container
				);
			});

			/**
			 * 1st error - PropType 'widgetId' is required
			 */
			expect(console.error).toHaveBeenCalledTimes(1);
		});
	});
});