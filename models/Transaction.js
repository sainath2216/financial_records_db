// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: String,
  category: String,
  amount: Number,
  date: Date,
  description: String
});


module.exports = mongoose.model('Transaction', transactionSchema);
