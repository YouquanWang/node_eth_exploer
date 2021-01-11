const ethModel = require('../model/ethModel')
const web3 = require('web3')
const DB = require('../model/mysqlDB')
const EthModel = new ethModel()
const transaction = {
    sql: {
        listSql: 'select count(*) as total from transaction;select * from transaction order by blockNumber desc limit ?,?',
        selectSql: 'select * from transaction where hash=?'
    },
    getTransactionInfo: async (req, res, next) => {
        let { hash } = req.body
        if (!hash) {
            res.json({
                status: 0,
                data: {},
                msg: '缺少hash参数'
            })
        }
        let blockInfo = {}
        try {
            let infoArr = await DB.query(transaction.sql.selectSql, hash);
            if (infoArr.length) {
                blockInfo = infoArr[0]
            } else {
                blockInfo = await EthModel.getTransaction(hash)
            }
            let receipt = await EthModel.getTransactionReceipt(hash)
            let status = {status: false}
            if (receipt) {
                status = receipt
            }
            res.json({
                status: 1,
                data: { ...blockInfo, ...receipt, timestamp: blockInfo.timestamp },
                msg: ''
            })
        } catch (error) {
            res.json({
                status: 0,
                data: {},
                msg: '请求失败'
            })
        }
    },
    getTransactionList: async (req, res, next) => {
        let { page, limit } = req.body
        DB.query(transaction.sql.listSql, [(page - 1) * limit, limit * 1]).then((data) => {
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
module.exports = transaction