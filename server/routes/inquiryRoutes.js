const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries, getInquiryById, updateInquiryStatus, deleteInquiry } = require('../controllers/inquiryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', createInquiry);
router.get('/', protect, admin, getInquiries);
router.get('/:id', protect, admin, getInquiryById);
router.put('/:id', protect, admin, updateInquiryStatus);
router.delete('/:id', protect, admin, deleteInquiry);

module.exports = router;
