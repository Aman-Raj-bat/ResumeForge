const Joi = require('joi');
const { errorResponse } = require('../utils/response');

const registerValidator = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().trim().required().messages({
      'string.empty': 'Full name is required',
      'any.required': 'Full name is required',
    }),
    email: Joi.string().email().trim().lowercase().required().messages({
      'string.email': 'Please provide a valid email address',
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'string.empty': 'Password is required',
      'any.required': 'Password is required',
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const formattedErrors = error.details.map((detail) => detail.message);
    return errorResponse(res, 400, 'Validation Error', formattedErrors);
  }
  next();
};

const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase().required().messages({
      'string.email': 'Please provide a valid email address',
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Password is required',
      'any.required': 'Password is required',
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const formattedErrors = error.details.map((detail) => detail.message);
    return errorResponse(res, 400, 'Validation Error', formattedErrors);
  }
  next();
};

module.exports = {
  registerValidator,
  loginValidator,
};
