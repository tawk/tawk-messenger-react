/**
 * @param {String} type - Constructor name
 * @param {String} value - Object to test
 * @returns - Boolean
 */
const isValidString = (type, value) => {
	if (!value || value.length === 0) {
		return false;
	}

	return value instanceof type || (value !== null && value !== undefined && value.constructor === type);
};


export {
	isValidString
};