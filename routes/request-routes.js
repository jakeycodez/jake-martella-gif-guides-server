const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request-controller');

// POST req for /request route

router.route('/request')
.all(requestController.requestGuide)

module.exports = router;