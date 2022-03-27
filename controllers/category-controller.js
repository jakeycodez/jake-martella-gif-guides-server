const categoryModel = require('../models/category-models');

const filePath = './data/categories.json';



exports.getAll = (_req, res) => {
// Create modified array of categories with name, id and poster data for client requests
const categoriesArr = categoryModel.getAll()
    .map(category => {
        return {
            "id": category.categoryID,
            "name": category.name, 
            "poster": category.poster
        }
    })
    res.status(200).json(categoriesArr)
    console.log('Successful category list')
};


// Get category from json list by ID