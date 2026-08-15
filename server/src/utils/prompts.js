const buildSummaryPrompt = (resumeData) => {
  return `
    You are an expert resume writer. Please write a professional resume summary for a candidate based on the following details.
    
    Current Data:
    - Target Title/Role: ${resumeData.title || 'Professional'}
    - Current Summary: ${resumeData.summary || 'None'}
    - Experience: ${resumeData.experience?.map(e => `${e.position} at ${e.company}`).join(', ') || 'None'}
    - Skills: ${resumeData.skills?.map(s => s.name).join(', ') || 'None'}
    
    Instructions:
    - Write a concise, impactful summary paragraph (3-4 sentences max).
    - Focus on achievements and core competencies.
    - Maintain a professional, confident tone.
    - Do NOT invent facts, numbers, or experiences not implied by the provided data.
    - Return ONLY the generated summary text, with no introductory or concluding remarks.
  `;
};

const buildExperienceRewritePrompt = (experienceData) => {
  return `
    You are an expert resume writer. Please rewrite the following job experience description to make it sound more professional, impactful, and action-oriented.
    
    Role: ${experienceData.position} at ${experienceData.company}
    Current Description: 
    ${experienceData.description}
    
    Instructions:
    - Improve grammar, vocabulary, and flow.
    - Use strong action verbs.
    - Keep it concise.
    - Do NOT invent new achievements, metrics, or responsibilities.
    - Return ONLY the rewritten description text.
  `;
};

const buildBulletsPrompt = (jobTitle, company) => {
  return `
    You are an expert resume writer. Generate 3-4 professional resume bullet points for the following role:
    
    Role: ${jobTitle}
    Company: ${company}
    
    Instructions:
    - Write generic but highly professional bullet points typical for this role.
    - Use strong action verbs.
    - Leave placeholders like "[X]%" or "[Specific Metric]" where the user should fill in their own data.
    - Format as a simple list.
    - Return ONLY the bullet points, with no conversational text.
  `;
};

const buildSkillsPrompt = (resumeData) => {
  const currentSkills = resumeData.skills?.map(s => s.name).join(', ') || 'None';
  return `
    You are an expert career coach. Based on the following resume data, suggest 5-10 additional relevant skills (both technical and soft skills) that the candidate might possess but hasn't listed.
    
    Current Role/Title: ${resumeData.title}
    Current Skills: ${currentSkills}
    Experience Context: ${resumeData.experience?.map(e => e.position).join(', ') || 'None'}
    
    Instructions:
    - Suggest highly relevant skills typical for this career path.
    - Do NOT suggest skills they already have.
    - Format the output as a simple comma-separated list of skills.
    - Return ONLY the comma-separated list.
  `;
};

const buildAtsPrompt = (resumeData) => {
  return `
    You are an expert ATS (Applicant Tracking System) optimizer. Review the following resume profile and provide 3-5 concise, actionable suggestions to improve its ATS compatibility.
    
    Role: ${resumeData.title}
    Skills: ${resumeData.skills?.map(s => s.name).join(', ') || 'None'}
    Summary: ${resumeData.summary || 'None'}
    
    Instructions:
    - Provide concise, actionable bullet points.
    - Focus on keyword optimization, formatting best practices, and standard industry terminology.
    - Do NOT provide a score.
    - Return ONLY the suggestions as a bulleted list.
  `;
};

const buildContextualRewritePrompt = (text, context, action) => {
  return `
    You are an expert resume writer and career coach. The user wants you to modify a specific piece of text from their resume.
    
    Action Requested: ${action}
    (e.g., 'Make concise', 'Improve', 'Add impact', 'Make ATS-friendly', 'Fix grammar')
    
    Current Text:
    "${text}"
    
    User Context (use to inform your rewrite if helpful):
    Target Role: ${context.targetRole || 'Not specified'}
    Skills: ${context.skills || 'Not specified'}
    
    Instructions:
    1. Rewrite the "Current Text" according to the "Action Requested".
    2. Provide a brief reason for why your suggestion is better.
    3. Provide 2 alternative rewrites (different tone or focus).
    4. You MUST format your response as a valid JSON object EXACTLY matching this schema:
    {
      "suggestion": "Your primary rewritten text",
      "reason": "Brief explanation of improvements",
      "alternatives": [
        "Alternative option 1",
        "Alternative option 2"
      ]
    }
  `;
};

module.exports = {
  buildSummaryPrompt,
  buildExperienceRewritePrompt,
  buildBulletsPrompt,
  buildSkillsPrompt,
  buildAtsPrompt,
  buildContextualRewritePrompt,
};
