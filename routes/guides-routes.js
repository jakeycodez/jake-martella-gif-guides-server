const express = require('express');
const router = express.Router();
const guidesController = require('../controllers/guides-controller');


  // GET req for "/:id" routes of specified category for guides

router.route('/')
.get(guidesController.getAllGuides) 

router.route('/categories/:id')
.get(guidesController.getAllGuidesOfCat)

router.route('/guide/:id')
.get(guidesController.getGuideById)


module.exports = router;