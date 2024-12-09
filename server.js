const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection to MongoDB Atlas
const mongoURI = "mongodb+srv://<Username>:<Password>@cluster-node-product-ap.39pun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-node-product-api";

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
