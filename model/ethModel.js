const Web3 = require('web3')
const fs = require('fs')
const DB = require('./mysqlDB')
class EthModel {
  constructor () {
    this.initWeb3()
  }
  initWeb3 () {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/18e5f53932ba46cdb9188a4c74eb02a9'));
    // this.getBlockNumber()
    // this.getGasPrice()
    // this.getBlock()
    // this.getBalance()
    // this.updateData()
    // this.getTransaction('0x2e298a9d0848271c57b2dd7480df5eeaaf07b7fbce911f39398231c1d15f1c0c')
    // this.web3.eth.getBlockNumber((err, data)=>{
    //   console.log(err, data)
    // })
  }
  getBlockNumber () {
    return this.web3.eth.getBlockNumber()
  }
  getHashrate () {
    return this.web3.eth.getHashrate()
  }
  getGasPrice () {
    return this.web3.eth.getGasPrice()
  }
  async getBalance () {
    let balance = await this.web3.getBalance('ds56b56C2efEf8233dbDd6b5Cae27E4b14036Be6b0')
    console.log(balance.toString())
  }
  getBlock (block) {
    return this.web3.eth.getBlock(block)
  }
  getTransaction (hash) {
    return this.web3.eth.getTransaction(hash)
  }
  getTransactionReceipt (hash) {
    return this.web3.eth.getTransactionReceipt(hash)
  }
 async getBLockInfo (blockNumber) {
    let blockInfo = await this.getBlock(blockNumber)
    let sql = `insert into block (difficulty,extraData,gasLimit,gasUsed,hash,miner,mixHash,nonce,number,parentHash,receiptsRoot,sha3Uncles,size,stateRoot,timestamp,totalDifficulty,transactionsRoot,transactionNum,unclesNum) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    let updateSql = `update block set difficulty=?,extraData=?,gasLimit=?,gasUsed=?,hash=?,miner=?,mixHash=?,nonce=?,number=?,parentHash=?,receiptsRoot=?,sha3Uncles=?,size=?,stateRoot=?,timestamp=?,totalDifficulty=?,transactionsRoot=?,transactionNum=?,unclesNum=? where number=?`
    let selectSql = `select * from block where number=?`
    let result = await DB.query(selectSql, blockNumber)
    if(!result.length) {
      await DB.query(sql, [blockInfo.difficulty,blockInfo.extraData,blockInfo.gasLimit,blockInfo.gasUsed,blockInfo.hash,blockInfo.miner,blockInfo.mixHash,blockInfo.nonce,blockInfo.number,blockInfo.parentHash,blockInfo.receiptsRoot,blockInfo.sha3Uncles,blockInfo.size,blockInfo.stateRoot,blockInfo.timestamp,blockInfo.totalDifficulty,blockInfo.transactionsRoot,blockInfo.transactions.length,blockInfo.uncles.length]); 
    } else {
      await DB.query(updateSql, [blockInfo.difficulty,blockInfo.extraData,blockInfo.gasLimit,blockInfo.gasUsed,blockInfo.hash,blockInfo.miner,blockInfo.mixHash,blockInfo.nonce,blockInfo.number,blockInfo.parentHash,blockInfo.receiptsRoot,blockInfo.sha3Uncles,blockInfo.size,blockInfo.stateRoot,blockInfo.timestamp,blockInfo.totalDifficulty,blockInfo.transactionsRoot,blockInfo.transactions.length,blockInfo.uncles.length, blockNumber]);  
    }
    let tLength = blockInfo.transactions.length
    let tsql = `insert into transaction (blockHash,blockNumber,fromAddress,gas,gasPrice,hash,input,nonce,toAddress,ethValue,timestamp) values (?,?,?,?,?,?,?,?,?,?,?)`
    let tUpdateSql = `update transaction set blockHash=?,blockNumber=?,fromAddress=?,gas=?,gasPrice=?,hash=?,input=?,nonce=?,toAddress=?,ethValue=?,timestamp=? where hash=?`
    let selectTsql = `select * from transaction where hash=?`
    if (tLength) {
      for (let tindex = 0; tindex < tLength; tindex++) {
        let hash = blockInfo.transactions[tindex];
        let sresult = await DB.query(selectTsql, hash)
        if (!sresult.length) {
          let transactionInfo = await this.getTransaction(hash)
          await DB.query(tsql, [transactionInfo.blockHash,transactionInfo.blockNumber,transactionInfo.from,transactionInfo.gas,transactionInfo.gasPrice,transactionInfo.hash,transactionInfo.input,transactionInfo.nonce,transactionInfo.to,transactionInfo.value,blockInfo.timestamp])
          // await DB.query(tsql, [transactionInfo.blockHash,transactionInfo.blockNumber,transactionInfo.from,transactionInfo.gas,transactionInfo.gasPrice,transactionInfo.hash,transactionInfo.input,transactionInfo.nonce,transactionInfo.to,transactionInfo.value])  
        } else {
          let transactionInfo = await this.getTransaction(hash)
          await DB.query(tUpdateSql, [transactionInfo.blockHash,transactionInfo.blockNumber,transactionInfo.from,transactionInfo.gas,transactionInfo.gasPrice,transactionInfo.hash,transactionInfo.input,transactionInfo.nonce,transactionInfo.to,transactionInfo.value,blockInfo.timestamp, hash])
        }
      }
    }
  }
  async updateCurrentData () {
    let currentBlock = await this.getBlockNumber()
    this.getBLockInfo(currentBlock)
  }
  async updateData () {
    let currentBlock = await this.getBlockNumber()
    console.log(currentBlock)
    let localBlock = Number(fs.readFileSync(`${__dirname}/block.txt`).toString()) + 1
    console.log(localBlock)
    for (let index = localBlock; index < currentBlock; index++) {
      this.getBLockInfo(index)
      fs.writeFileSync(`${__dirname}/block.txt`, index.toString())
    }
  }
}

module.exports = EthModel
