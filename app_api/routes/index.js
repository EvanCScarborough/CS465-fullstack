const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// Get all
router
    .route('/trips')
    .get(tripsController.tripsList);

// Get with trip code param
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;