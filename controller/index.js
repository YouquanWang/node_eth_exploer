const ethModel = require('../model/ethModel')
const web3 = require('web3')
const DB = require('../model/mysqlDB')
let EthModel = new ethModel()
let index = {
    sql: {
        blockSql: 'select * from block order by number desc limit 10',
        transactionSql: 'select * from transaction order by blockNumber desc limit 10'
    },
    getGasPrice: (req, res, next) => {
        EthModel.getGasPrice().then((data) => {
            res.json({
                status: 1,
                data: web3.utils.fromWei(data, 'Gwei'),
                msg: ''
            })
        }).catch(() => {
            res.json({
                status: 0,
                data: {},
                msg: '请求失败'
            })
        })
    },
    getHashrate: (req, res, next) => {
        EthModel.getHashrate().then((data) => {
            res.json({
                status: 1,
                data: data,
                msg: ''
            })
        }).catch(() => {
            res.json({
                status: 0,
                data: {},
                msg: '请求失败'
            })
        })
    },
    getBlockNumber: (req, res, next) => {
        EthModel.getBlockNumber().then((data) => {
            res.json({
                status: 1,
                data: data,
                msg: ''
            })
        }).catch(() => {
            res.json({
                status: 0,
                data: {},
                msg: '请求失败'
            })
        })
    },
    getBlockList: (req, res, next) => {
        DB.query(index.sql.blockSql).then((data) => {
            res.json({
                status: 1,
                data: data,
                msg: ''
            })
        }).catch(() => {
            res.json({
                status: 0,
                data: [],
                msg: '请求失败'
            })
        })
    },
    getTransactionList: (req, res, next) => {
        DB.query(index.sql.transactionSql).then((data) => {
            res.json({
                status: 1,
                data: data,
                msg: ''
            })
        }).catch(() => {
            res.json({
                status: 0,
                data: [],
                msg: '请求失败'
            })
        })
    }
}
module.exports = index