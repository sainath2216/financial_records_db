
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const transactionRoutes = require('./routes/transactions');
const categoryRoutes = require('./routes/categories');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection using environment variable
const db = process.env.MONGO_URI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

// Routes
app.use('/transactions', transactionRoutes);
app.use('/categories', categoryRoutes);

// Start the server using the PORT from .env or a default value
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/', (req, res) => {
  res.send("Welcome to financial records database");
})
  
