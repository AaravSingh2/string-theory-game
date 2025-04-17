// backend/server.js
const gameroutes = require('./routes/game-routes'); // Import routes.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Example route
app.use('/api', gameroutes);
// app.use('/', routes);
// app.get('/', (req, res) => {
//   res.send('Hello, String Theory Game API');
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
