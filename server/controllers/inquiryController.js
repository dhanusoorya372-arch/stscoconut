const Inquiry = require('../models/Inquiry');

exports.createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    return res.status(201).json({ message: 'Inquiry submitted successfully', data: inquiry });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    return res.json(inquiries);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    return res.json(inquiry);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status }, { new: true, runValidators: true });
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    return res.json(inquiry);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    return res.json({ message: 'Inquiry removed' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
