 
const mongoose = require('mongoose');
const Product = require('./models/Product');

const uri = 'mongodb+srv://<Username>:<Password>@cluster-node-product-ap.39pun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-node-product-api'

// MongoDB connection
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Data to be seeded
const products = [
  {
    id: 21,
    title: "Fifa23",
    price: 19.99,
    description: "The pinnacle of soccer gaming. Stunning graphics, authentic gameplay, and endless competition. Step onto the virtual pitch and become a legend!",
    category: "PS5",
    image: "fifa23.jpg",
    rating: { rate: 3.90, count: 120 }
  },
  {
    id: 22,
    title: "Spiderman",
    price: 22.30,
    description: "Swing into action with Spider-Man! Unleash your web-slinging skills in a thrilling open-world adventure. Defend New York City, fight iconic villains, and become the hero the city needs",
    category: "PS4",
    image: "spiderman.jpg",
    rating: { rate: 4.10, count: 259 }
  },
  {
    id: 23,
    title: "Call of Duty",
    price: 55.99,
    description: "Experience intense warfare in Call of Duty. Engage in heart-pounding battles across various eras and locations. Join the ranks and prove your skills in this iconic first-person shooter.",
    category: "PS4",
    image: "callofduty.jpg",
    rating: { rate: 4.70, count: 500 }
  },
  {
    id: 24,
    title: "Diablo",
    price: 15.99,
    description: "Dive into darkness, battle demons, and become a legendary hero in Diablo's action-packed RPG world.",
    category: "PS5",
    image: "diablo.jpg",
    rating: { rate: 2.10, count: 430 }
  },
  {
    id: 25,
    title: "Final Fantasy",
    price: 695.00,
    description: "Enter a fantastical world of magic and adventure in Final Fantasy. Join heroes on an epic quest, face mythical creatures, and unravel captivating stories in this iconic RPG series.",
    category: "PS5",
    image: "finalfantasy.jpg",
    rating: { rate: 4.60, count: 400 }
  },
  {
    id: 26,
    title: "God of War",
    price: 168.00,
    description: "Unleash Kratos, battle gods, and conquer epic mythology in God of War – the ultimate action adventure.",
    category: "PS4",
    image: "godofwar.jpg",
    rating: { rate: 3.90, count: 70 }
  },
  {
    id: 27,
    title: "NBA 23",
    price: 9.99,
    description: "Dunk into the future with NBA 23! Experience next-gen basketball action, stunning graphics, and immersive gameplay. Take your team to the championship and redefine the game",
    category: "PS5",
    image: "nba23.jpg",
    rating: { rate: 3.00, count: 400 }
  },
  {
    id: 28,
    title: "Wonderland",
    price: 10.99,
    description: "Enter Wonderland – a whimsical adventure awaits! Explore enchanting realms, solve puzzles, and meet quirky characters in this magical game.",
    category: "XBOX",
    image: "wonderland.jpg",
    rating: { rate: 1.90, count: 100 }
  },
  {
    id: 29,
    title: "Spiderman 2",
    price: 64.00,
    description: "Swing back into action with Spider-Man 2! Dive into an open-world metropolis, fight iconic villains, and unleash incredible web-slinging skills in the ultimate superhero experience.",
    category: "PS5",
    image: "spiderman.jpg",
    rating: { rate: 3.30, count: 203 }
  }
];

// Insert data into the database
Product.insertMany(products)
  .then(() => {
    console.log('Sample data seeded successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });