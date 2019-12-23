const express = require('express');
const router = express.Router();

const reportController = require('../controller/report.controller');

router.get('/report', reportController.getData);

module.exports = router;