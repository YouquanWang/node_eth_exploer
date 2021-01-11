
const express = require('express');
const router = express.Router();
const indexController = require('../../controller/index')
router.post('/getGasPrice', indexController.getGasPrice)
router.post('/getHashrate', indexController.getHashrate)
router.post('/getBlockNumber', indexController.getBlockNumber)
router.post('/getBlockList', indexController.getBlockList)
router.post('/getTransactionList', indexController.getTransactionList)
module.exports = router;
