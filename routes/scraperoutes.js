const express = require('express');
const router = express.Router();
const { scrapeWeb } = require('../controllers/scrapeController.js');


router.route("/").post(scrapeWeb)

module.exports = router;
