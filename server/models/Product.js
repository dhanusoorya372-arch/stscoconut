const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    specifications: { type: Object, default: {} },
    packaging: { type: [String], default: [] },
    minimumOrderQuantity: { type: String, default: '1 container' },
    availability: { type: String, default: 'Available' },
    exportMarkets: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
