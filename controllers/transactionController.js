// controllers/transactionController.js
const Transaction = require('../models/Transaction');

// Add a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const transaction = new Transaction({ type, category, amount, date, description });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
};

// Get a single transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transaction' });
  }
};

// Update a transaction by ID
exports.updateTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, { type, category, amount, date, description }, { new: true });
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

// Delete a transaction by ID
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (transaction) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};

// Get financial summary
exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.totalIncome += transaction.amount;
        } else {
          acc.totalExpense += transaction.amount;
        }
        return acc;
      },
      { totalIncome: 0, totalExpense: 0 }
    );
    summary.balance = summary.totalIncome - summary.totalExpense;
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve summary' });
  }
};
