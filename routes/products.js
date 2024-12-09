const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Get all products from the DB
    // Just return the products with the default Mongo _id, which is already unique
    const productsWithIds = products.map((product) => ({
      id: product._id.toString(), // Use the ObjectId directly as a string
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
    }));

    res.json(productsWithIds); // Return the products as JSON
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Return the single product with its MongoDB _id as string
    const productWithId = {
      id: product._id.toString(), // Use ObjectId directly as string
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
    };

    res.json(productWithId); // Return the product details
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
