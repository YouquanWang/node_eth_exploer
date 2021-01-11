const ethModel = require('../model/ethModel')
const web3 = require('web3')
const DB = require('../model/mysqlDB')
const EthModel = new ethModel()
const block = {
  sql: {
    listSql: 'select count(*) as total from block;select * from block order by number desc limit ?,?',
    selectSql: 'select * from block where number=?'
  },
  getBlockInfo: async (req, res, next) => {
    let { blockNumber } = req.body
    if (!blockNumber) {
        res.json({
            status: 0,
            data: {},
            msg: '缺少blockNumber参数' 
           })
    }
    let infoArr = await DB.query(block.sql.selectSql,blockNumber);
    if (infoArr.length) {
      res.json({
        status: 1,
        data: infoArr[0],
        msg: ''
      })
    } else {
      EthModel.getBlock(blockNumber).then((data) => {
        res.json({
            status: 1,
            data: {...data,transactionNum: data.transactions.length},
            msg: ''
          })
    }).catch(() => {
       res.json({
        status: 0,
        data: {},
        msg: '请求失败' 
       })
    })
    }
  },
  getBlockList: async (req, res, next) => {
    let { page, limit } = req.body
    console.log(req.body)
    DB.query(block.sql.listSql, [(page - 1) * limit, limit * 1]).then((data) => {
        res.json({
            status: 1,
            data: {
              list: data[1],
              total: data[0][0].total,
            },
            msg: ''
          })
    }).catch(() => {
       res.json({
        status: 0,
        data: {},
        msg: '请求失败' 
       })
    })
  }
}
module.exports = block