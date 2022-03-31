const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search-controller');

router.route('/search')
.get(searchController.searchAllGuides)

module.exports = router;