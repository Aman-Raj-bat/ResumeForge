import api from './api';

export const aiService = {
  generateSummary: async (resumeData) => {
    const res = await api.post('/ai/summary', { resumeData });
    return res.data;
  },
  
  rewriteExperience: async (experienceData) => {
    const res = await api.post('/ai/experience', { experienceData });
    return res.data;
  },
  
  generateBullets: async (jobTitle, company) => {
    const res = await api.post('/ai/bullets', { jobTitle, company });
    return res.data;
  },
  
  suggestSkills: async (resumeData) => {
    const res = await api.post('/ai/skills', { resumeData });
    return res.data;
  },
  
  suggestAts: async (resumeData) => {
    const res = await api.post('/ai/ats', { resumeData });
    return res.data;
  }
};
