
const express = require('express');
const router = express.Router();
const index = require('./api/index');
router.use('/index', index);
module.exports = router;
