const express = require('express');
const router = express.Router();
const { sendContactMessage, getContactMessages } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', sendContactMessage);
router.get('/', protect, admin, getContactMessages);

module.exports = router;
