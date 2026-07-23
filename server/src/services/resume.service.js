const Resume = require('../models/resume.model');

const createResume = async (userId, resumeData) => {
  const resume = await Resume.create({
    user: userId,
    ...resumeData,
  });
  return resume;
};

const getResumes = async (userId) => {
  const resumes = await Resume.find({ user: userId }).sort({ updatedAt: -1 });
  return resumes;
};

const getResumeById = async (userId, resumeId) => {
  const resume = await Resume.findOne({ _id: resumeId, user: userId });
  if (!resume) {
    const error = new Error('Resume not found or unauthorized');
    error.statusCode = 404;
    throw error;
  }
  return resume;
};

const updateResume = async (userId, resumeId, updateData) => {
  let resume = await Resume.findOne({ _id: resumeId, user: userId });
  
  if (!resume) {
    const error = new Error('Resume not found or unauthorized');
    error.statusCode = 404;
    throw error;
  }

  resume = await Resume.findByIdAndUpdate(
    resumeId,
    updateData,
    { new: true, runValidators: true }
  );

  return resume;
};

const deleteResume = async (userId, resumeId) => {
  const resume = await Resume.findOne({ _id: resumeId, user: userId });
  
  if (!resume) {
    const error = new Error('Resume not found or unauthorized');
    error.statusCode = 404;
    throw error;
  }

  await Resume.deleteOne({ _id: resumeId });
  return { id: resumeId };
};

module.exports = {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
