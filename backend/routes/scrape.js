const express = require('express');
const router = express.Router();
const scrapeController = require('../controllers/scrape');

router.post('/', scrapeController.scrape);

module.exports = router;