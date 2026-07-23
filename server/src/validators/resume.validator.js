const Joi = require('joi');
const { errorResponse } = require('../utils/response');

const resumeSchemaValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().trim().required().messages({
      'string.empty': 'Title is required',
    }),
    personalInfo: Joi.object({
      fullName: Joi.string().allow('', null),
      email: Joi.string().email().allow('', null),
      phone: Joi.string().allow('', null),
      location: Joi.string().allow('', null),
      website: Joi.string().allow('', null),
      linkedIn: Joi.string().allow('', null),
      github: Joi.string().allow('', null),
    }).optional(),
    summary: Joi.string().allow('', null),
    education: Joi.array().items(
      Joi.object({
        institution: Joi.string().allow('', null),
        degree: Joi.string().allow('', null),
        fieldOfStudy: Joi.string().allow('', null),
        startDate: Joi.string().allow('', null),
        endDate: Joi.string().allow('', null),
        description: Joi.string().allow('', null),
      })
    ).optional(),
    experience: Joi.array().items(
      Joi.object({
        company: Joi.string().allow('', null),
        position: Joi.string().allow('', null),
        location: Joi.string().allow('', null),
        startDate: Joi.string().allow('', null),
        endDate: Joi.string().allow('', null),
        current: Joi.boolean().default(false),
        description: Joi.string().allow('', null),
      })
    ).optional(),
    projects: Joi.array().items(
      Joi.object({
        name: Joi.string().allow('', null),
        description: Joi.string().allow('', null),
        url: Joi.string().allow('', null),
        technologies: Joi.string().allow('', null),
      })
    ).optional(),
    skills: Joi.array().items(
      Joi.object({
        name: Joi.string().allow('', null),
      })
    ).optional(),
    certifications: Joi.array().items(
      Joi.object({
        name: Joi.string().allow('', null),
        issuer: Joi.string().allow('', null),
        date: Joi.string().allow('', null),
        url: Joi.string().allow('', null),
      })
    ).optional(),
    languages: Joi.array().items(
      Joi.object({
        name: Joi.string().allow('', null),
        proficiency: Joi.string().allow('', null),
      })
    ).optional(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });
  if (error) {
    const formattedErrors = error.details.map((detail) => detail.message);
    return errorResponse(res, 400, 'Validation Error', formattedErrors);
  }
  next();
};

module.exports = {
  resumeSchemaValidator,
};
