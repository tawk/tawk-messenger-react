/**
 * @param {String} value - A data that needs to be validated
 * @returns - Boolean
 */
const isValidString = (value) => {
	if (!value || value.length === 0) {
		return false;
	}

	return value !== null && value !== undefined && typeof value === 'string';
};


export {
	isValidString
};