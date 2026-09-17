const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    companyName: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    product: { type: String, required: true, trim: true },
    quantity: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Processing', 'Completed', 'Cancelled'],
      default: 'New',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
