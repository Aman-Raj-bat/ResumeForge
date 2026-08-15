const express = require('express');
const router = express.Router();
const {
  generateSummary,
  rewriteExperience,
  generateBullets,
  suggestSkills,
  suggestAts,
  rewriteContextual,
} = require('../controllers/ai.controller');
const { protect } = require('../middlewares/auth.middleware');

// All AI routes require authentication
router.use(protect);

router.post('/summary', generateSummary);
router.post('/experience', rewriteExperience);
router.post('/bullets', generateBullets);
router.post('/skills', suggestSkills);
router.post('/ats', suggestAts);
router.post('/rewrite', rewriteContextual);

module.exports = router;
