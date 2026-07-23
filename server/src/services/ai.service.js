const { GoogleGenerativeAI } = require('@google/generative-ai');

let genAI = null;

const getModel = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }
  
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  
  return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
};

const generateContent = async (prompt) => {
  try {
    if (!prompt || prompt.trim() === '') {
      throw new Error('Prompt cannot be empty');
    }

    const model = getModel();
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean up typical markdown wrappers from AI if requested to just return text
    text = text.replace(/^```[\s\S]*?\n/, '').replace(/```$/, '').trim();
    
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Handle specific rate limits or generic errors
    if (error.status === 429) {
      throw new Error('AI service is currently rate limited. Please try again later.');
    }
    
    throw new Error('Failed to generate AI content. Please check API key or try again.');
  }
};

module.exports = {
  generateContent,
};
