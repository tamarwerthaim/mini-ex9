const categoryService = require('../services/category');

const createCategory = async (req, res) => {
    const newCategory = await categoryService.createCategory(req.body.name);
    res.json(newCategory);
};

const getCategories = async (req, res) => {
    const categories = await categoryService.getCategories();
    res.json(categories);
};

const getCategory = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
        return res.status(404).json({ errors: ['Category not found'] });
    }
    res.json(category);
};

const updateCategory = async (req, res) => {
    const category = await categoryService.updateCategory(req.params.id, req.body.name);
    if (!category) {
        return res.status(404).json({ errors: ['Category not found'] });
    }
    res.json(category);
};

const deleteCategory = async (req, res) => {
    const category = await categoryService.deleteCategory(req.params.id);
    if (!category) {
        return res.status(404).json({ errors: ['Category not found'] });
    }
    res.json(category);
};

module.exports = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
};