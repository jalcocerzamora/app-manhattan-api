// 4XX status code related to client side error
// 5XX status code related to server side error

const getErrorStatus = require('../constant/ErrorData');

function findErrorMessage(status) {
	return getErrorStatus.ERROR_STATUS_ARRAY.find(v => v.status == status) || { error: 'There must be an error' };
}

/**
		* Success Reposnse.
		* @param {number} status - Success response status
		* @param {string} succMessage - Success response message
		* @param {any} data - Success response custom data
	*/
let successResponse = (status, succMessage, data) => {
	return {
		status,
		message: succMessage,
		data
	}
}

/**
		* Error Reposnse.
		* @param {Response} res - Send error response
		* @param {number} statusCode - Error status Code
		* @param {strring} errMessage - Error response message
	*/
let errorResponse = (statusCode, errMessage) => {
	const errResponse = findErrorMessage(statusCode);
	if(errResponse.error) {
		return { 
			status: statusCode, 
			message: errMessage, 
			data: errResponse.error
		};
	}
	return { ...errResponse };
}


module.exports = {
	errorResponse,
	successResponse,
};
