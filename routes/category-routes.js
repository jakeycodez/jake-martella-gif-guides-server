const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category-controller.js');

// GET & POST req for "/" routes
router.route('/categories')
  .get(categoryController.getAll)


// // GET, PUT & DELETE req for "/:id" routes of specified category
// router.route('/:id')
//   .get(categoryController.getById)

module.exports = router;