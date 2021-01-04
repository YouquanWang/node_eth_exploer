const { request } = require('express');
var express = require('express');
var router = express.Router();
const EthModel = require('../model/ethModel')
var ethModel = new EthModel()
// var tools = require('../model/tools')
// var BigNumber = require('bignumber.js');
/* GET home page. */
router.get('/price', async (req, res, next) => {
  let price = await ethModel.getHjlPrice()
  res.json({
    price: price
  })
});
module.exports = router;
