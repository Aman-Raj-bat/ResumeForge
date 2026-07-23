const resumeService = require('../services/resume.service');
const { successResponse } = require('../utils/response');

const createResume = async (req, res, next) => {
  try {
    const resume = await resumeService.createResume(req.user.id, req.body);
    return successResponse(res, 201, 'Resume created successfully', resume);
  } catch (error) {
    next(error);
  }
};

const getResumes = async (req, res, next) => {
  try {
    const resumes = await resumeService.getResumes(req.user.id);
    return successResponse(res, 200, 'Resumes fetched successfully', resumes);
  } catch (error) {
    next(error);
  }
};

const getResumeById = async (req, res, next) => {
  try {
    const resume = await resumeService.getResumeById(req.user.id, req.params.id);
    return successResponse(res, 200, 'Resume fetched successfully', resume);
  } catch (error) {
    next(error);
  }
};

const updateResume = async (req, res, next) => {
  try {
    const resume = await resumeService.updateResume(req.user.id, req.params.id, req.body);
    return successResponse(res, 200, 'Resume updated successfully', resume);
  } catch (error) {
    next(error);
  }
};

const deleteResume = async (req, res, next) => {
  try {
    const result = await resumeService.deleteResume(req.user.id, req.params.id);
    return successResponse(res, 200, 'Resume deleted successfully', result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
