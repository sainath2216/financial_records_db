// routes/categories.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// POST /categories - Add a new category
router.post('/', categoryController.createCategory);

// GET /categories - Get all categories
router.get('/', categoryController.getCategories);

module.exports = router;
