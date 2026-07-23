const { errorResponse } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  // Format specific mongoose errors if needed here
  
  return errorResponse(res, statusCode, message);
};

const notFoundHandler = (req, res, next) => {
  return errorResponse(res, 404, `Not Found - ${req.originalUrl}`);
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
