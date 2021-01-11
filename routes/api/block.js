
const express = require('express');
const router = express.Router();
const blockController = require('../../controller/block')
router.post('/blockInfo', blockController.getBlockInfo)
router.post('/blockList', blockController.getBlockList)
module.exports = router;
