const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  rate: { type: Number, required: true },
  count: { type: Number, required: true }
});

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: RatingSchema, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
