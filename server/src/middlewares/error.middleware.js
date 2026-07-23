const { errorResponse } = require('../utils/response');
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  const responsePayload = {
    success: false,
    message: process.env.NODE_ENV === 'production' && statusCode === 500 
      ? 'Internal Server Error' 
      : message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  };
  
  return res.status(statusCode).json(responsePayload);
};

const notFoundHandler = (req, res, next) => {
  return errorResponse(res, 404, `Not Found - ${req.originalUrl}`);
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
