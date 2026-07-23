const successResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, statusCode, message, errors = null) => {
  const payload = {
    success: false,
    message,
  };
  
  if (errors) {
    payload.errors = errors;
  }
  
  return res.status(statusCode).json(payload);
};

module.exports = {
  successResponse,
  errorResponse,
};
