const Product = require('../models/Product');

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, category, image, specifications, packaging, minimumOrderQuantity, availability, exportMarkets } = req.body;

    if (!name || !description || !category || !image) {
      return res.status(400).json({ message: 'Name, description, category, and image are required' });
    }

    const slug = generateSlug(name);

    const product = await Product.create({
      name,
      slug,
      description,
      category,
      image,
      specifications: specifications || {},
      packaging: packaging || [],
      minimumOrderQuantity: minimumOrderQuantity || '1 container',
      availability: availability || 'Available',
      exportMarkets: exportMarkets || [],
    });

    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const updateData = { ...req.body };

    if (name) {
      updateData.slug = generateSlug(name);
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json({ message: 'Product removed' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
