// routes/transactions.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// POST /transactions - Add a new transaction
router.post('/', transactionController.createTransaction);

// GET /transactions - Get all transactions
router.get('/', transactionController.getTransactions);

// GET /summary - Get financial summary
router.get('/summary', transactionController.getSummary);

// GET /transactions/:id - Get transaction by ID
router.get('/:id', transactionController.getTransactionById);

// PUT /transactions/:id - Update transaction by ID
router.put('/:id', transactionController.updateTransaction);

// DELETE /transactions/:id - Delete transaction by ID
router.delete('/:id', transactionController.deleteTransaction);



module.exports = router;
