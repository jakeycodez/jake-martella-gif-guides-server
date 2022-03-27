const express = require('express');
const router = express.Router();
const guidesController = require('../controllers/guides-controller');


  // GET req for "/:id" routes of specified category for guides
router.route('/categories/:id')
.get(guidesController.getAllGuidesOfCat)


module.exports = router;