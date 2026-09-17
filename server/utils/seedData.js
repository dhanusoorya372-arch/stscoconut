const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');

const seedAdmin = async () => {
  const adminEmail = 'admin@ststraders.com';
  const existingAdmin = await User.findOne({ email: adminEmail });

  if (!existingAdmin) {
    const admin = new User({
      name: 'STS Traders Admin',
      email: adminEmail,
      password: 'admin123',
      role: 'admin',
    });
    await admin.save();
    console.log('Seeded admin user: admin@ststraders.com / admin123');
  }
};

const seedProducts = async () => {
  const count = await Product.countDocuments();
  if (count > 0) return;

  const products = [
    {
      name: 'Fresh Coconuts',
      slug: 'fresh-coconuts',
      description: 'Naturally grown coconuts harvested at peak maturity to ensure freshness, rich coconut water, and premium taste for domestic and export buyers.',
      category: 'Fresh Produce',
      image: 'https://images.unsplash.com/photo-1519996521430-02b1f4f4d5d2?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Variety: 'Tall and Dwarf hybrid',
        Moisture: 'High natural hydration',
        Shelf life: 'Up to 4 weeks under ideal conditions',
        Origin: 'Sustainably grown coconut farms',
      },
      packaging: ['Wooden crates', 'Jute sacks', 'Custom export cartons'],
      minimumOrderQuantity: '1 container',
      availability: 'Available',
      exportMarkets: ['Asia', 'Middle East', 'Europe'],
    },
    {
      name: 'Tender Coconuts',
      slug: 'tender-coconuts',
      description: 'Young coconuts harvested for their sweet water and soft flesh, packed carefully to preserve freshness for beverages and retail markets.',
      category: 'Fresh Produce',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Size: 'Medium to large',
        Water content: 'High natural coconut water',
        Harvest stage: 'Tender and young',
        Packaging: 'Export-ready cartons',
      },
      packaging: ['Plastic crates', 'Customized retail packs', 'Bulk export pallets'],
      minimumOrderQuantity: '500 units',
      availability: 'Available',
      exportMarkets: ['Middle East', 'Africa', 'Asia'],
    },
    {
      name: 'Mature Coconuts',
      slug: 'mature-coconuts',
      description: 'Fully matured coconuts known for rich kernel quality, excellent processing suitability, and reliable export performance across industrial channels.',
      category: 'Industrial Raw Material',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Maturity: 'Fully mature',
        Kernel quality: 'High oil content',
        Use case: 'Food processing and manufacturing',
        Origin: 'Premium coconut-growing regions',
      },
      packaging: ['Standard sacks', 'Export mesh bags', 'Bulk containers'],
      minimumOrderQuantity: '2 containers',
      availability: 'Available',
      exportMarkets: ['Europe', 'Asia', 'Africa'],
    },
    {
      name: 'Desiccated Coconut',
      slug: 'desiccated-coconut',
      description: 'Premium desiccated coconut processed under controlled conditions for bakery, confectionery, and healthy food applications.',
      category: 'Value Added',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Moisture: 'Low moisture content',
        Grade: 'Food-grade',
        Application: 'Bakery and snacks',
        Processing: 'Hygienic and standardized',
      },
      packaging: ['25kg bags', '50kg bags', 'Private label packs'],
      minimumOrderQuantity: '1 pallet',
      availability: 'Available',
      exportMarkets: ['Europe', 'Middle East', 'Asia'],
    },
    {
      name: 'Coconut Copra',
      slug: 'coconut-copra',
      description: 'Processed copra selected for dependable oil extraction and food ingredient applications requiring clean, consistent quality.',
      category: 'Industrial Raw Material',
      image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Grade: 'Export grade',
        Use case: 'Oil extraction',
        Quality: 'Clean and processed under controlled conditions',
        Storage: 'Dry and protected packaging',
      },
      packaging: ['PP bags', 'Jute sacks', 'Container loads'],
      minimumOrderQuantity: '1 container',
      availability: 'Available',
      exportMarkets: ['Europe', 'Asia', 'Middle East'],
    },
    {
      name: 'Coconut Shell',
      slug: 'coconut-shell',
      description: 'Eco-conscious coconut shell material suited for industrial and artisanal uses, supplied with consistent quality and clean sorting.',
      category: 'By Product',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Color: 'Natural brown',
        Use case: 'Industrial and eco applications',
        Condition: 'Clean and sorted',
        Grade: 'Commercial export quality',
      },
      packaging: ['Bales', 'Bulk sacks', 'Custom packaging'],
      minimumOrderQuantity: '500 kg',
      availability: 'Available',
      exportMarkets: ['Asia', 'Europe', 'Africa'],
    },
    {
      name: 'Coconut Husk',
      slug: 'coconut-husk',
      description: 'Naturally sourced coconut husk processed for multiple applications, including sustainable material use and agricultural support channels.',
      category: 'By Product',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Type: 'Natural fiber',
        Use case: 'Industrial and agricultural uses',
        Condition: 'Clean and dry',
      },
      packaging: ['Bales', 'Bulk packs', 'Export sacks'],
      minimumOrderQuantity: '1 pallet',
      availability: 'Available',
      exportMarkets: ['Asia', 'Middle East', 'Africa'],
    },
    {
      name: 'Coconut Oil',
      slug: 'coconut-oil',
      description: 'Refined and unrefined coconut oil produced to meet quality needs for food, personal care, and industrial buyers seeking consistent supply.',
      category: 'Processed Goods',
      image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd3a3?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Type: 'Refined and virgin options',
        Use case: 'Food and cosmetics',
        Quality: 'Clean and traceable',
      },
      packaging: ['1L bottles', '5L cans', 'Bulk drums'],
      minimumOrderQuantity: '200 liters',
      availability: 'Available',
      exportMarkets: ['Europe', 'Middle East', 'Asia'],
    },
    {
      name: 'Coconut-based Products',
      slug: 'coconut-based-products',
      description: 'A range of coconut-derived items crafted for food, wellness, and manufacturing buyers seeking broad sourcing flexibility from one supplier.',
      category: 'Value Added',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
      specifications: {
        Scope: 'Custom product ranges available',
        Application: 'Bulk and retail buyers',
        Quality: 'Tailored to customer requirements',
      },
      packaging: ['Private label', 'Retail packs', 'Bulk container orders'],
      minimumOrderQuantity: '500 units',
      availability: 'Available',
      exportMarkets: ['Global'],
    },
  ];

  await Product.insertMany(products);
  console.log('Seeded product catalog');
};

module.exports = { seedAdmin, seedProducts };
