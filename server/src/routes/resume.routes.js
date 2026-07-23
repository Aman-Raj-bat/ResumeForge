const express = require('express');
const router = express.Router();
const {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resume.controller');
const { protect } = require('../middlewares/auth.middleware');
const { resumeSchemaValidator } = require('../validators/resume.validator');

// All resume routes require authentication
router.use(protect);

router.route('/')
  .get(getResumes)
  .post(resumeSchemaValidator, createResume);

router.route('/:id')
  .get(getResumeById)
  .put(resumeSchemaValidator, updateResume)
  .delete(deleteResume);

module.exports = router;
