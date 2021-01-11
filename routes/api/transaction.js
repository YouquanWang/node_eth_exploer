
const express = require('express');
const router = express.Router();
const transactionController = require('../../controller/transaction')
router.post('/transactionInfo', transactionController.getTransactionInfo)
router.post('/transactionList', transactionController.getTransactionList)
module.exports = router;
