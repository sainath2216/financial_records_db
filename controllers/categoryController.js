// controllers/categoryController.js
const Category = require('../models/Category');

// Add a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;
    const category = new Category({ name, type });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
};
