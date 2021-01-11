
const express = require('express');
const router = express.Router();
const index = require('./api/index');
const block = require('./api/block')
const transaction = require('./api/transaction')
router.use('/index', index);
router.use('/block', block);
router.use('/transaction', transaction);
module.exports = router;
