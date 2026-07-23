const aiService = require('../services/ai.service');
const { successResponse, errorResponse } = require('../utils/response');
const { 
  buildSummaryPrompt, 
  buildExperienceRewritePrompt, 
  buildBulletsPrompt, 
  buildSkillsPrompt, 
  buildAtsPrompt 
} = require('../utils/prompts');

const generateSummary = async (req, res, next) => {
  try {
    const { resumeData } = req.body;
    if (!resumeData) return errorResponse(res, 400, 'resumeData is required');
    
    const prompt = buildSummaryPrompt(resumeData);
    const text = await aiService.generateContent(prompt);
    
    return successResponse(res, 200, 'Summary generated', { result: text });
  } catch (error) {
    next(error);
  }
};

const rewriteExperience = async (req, res, next) => {
  try {
    const { experienceData } = req.body;
    if (!experienceData || !experienceData.description) {
      return errorResponse(res, 400, 'Valid experienceData with description is required');
    }
    
    const prompt = buildExperienceRewritePrompt(experienceData);
    const text = await aiService.generateContent(prompt);
    
    return successResponse(res, 200, 'Experience rewritten', { result: text });
  } catch (error) {
    next(error);
  }
};

const generateBullets = async (req, res, next) => {
  try {
    const { jobTitle, company } = req.body;
    if (!jobTitle) return errorResponse(res, 400, 'jobTitle is required');
    
    const prompt = buildBulletsPrompt(jobTitle, company || 'Unknown Company');
    const text = await aiService.generateContent(prompt);
    
    return successResponse(res, 200, 'Bullets generated', { result: text });
  } catch (error) {
    next(error);
  }
};

const suggestSkills = async (req, res, next) => {
  try {
    const { resumeData } = req.body;
    if (!resumeData) return errorResponse(res, 400, 'resumeData is required');
    
    const prompt = buildSkillsPrompt(resumeData);
    const text = await aiService.generateContent(prompt);
    
    return successResponse(res, 200, 'Skills suggested', { result: text });
  } catch (error) {
    next(error);
  }
};

const suggestAts = async (req, res, next) => {
  try {
    const { resumeData } = req.body;
    if (!resumeData) return errorResponse(res, 400, 'resumeData is required');
    
    const prompt = buildAtsPrompt(resumeData);
    const text = await aiService.generateContent(prompt);
    
    return successResponse(res, 200, 'ATS suggestions generated', { result: text });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateSummary,
  rewriteExperience,
  generateBullets,
  suggestSkills,
  suggestAts,
};
