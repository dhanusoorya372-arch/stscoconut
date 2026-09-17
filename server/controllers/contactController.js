const ContactMessage = require('../models/ContactMessage');

exports.sendContactMessage = async (req, res) => {
  try {
    const message = await ContactMessage.create(req.body);
    return res.status(201).json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
    return res.json(messages);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
