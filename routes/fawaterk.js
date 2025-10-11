const express = require('express');
const router = express.Router();
const fawaterkController = require('../controllers/fawaterkController');

router.post('/paid_json', fawaterkController.createInvoice);

module.exports = router;
