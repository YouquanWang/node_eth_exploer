const Web3 = require('web3')
const fs = require('fs')

class EthModel {
  constructor () {
    this.WSLock = false
    this.initWS()
  }
  initWS () {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/68715df044514d4eb102c4abdcdb9a68'));
    this.getBlockNumber()
    // this.getGasPrice()
    this.getBlock()
    // this.getBalance()
  }
  async getBlockNumber () {
    let blockNumber = await this.web3.eth.getBlockNumber()
    console.log(blockNumber)
    return blockNumber
  }
  async getGasPrice () {
    let gasPrice = await this.web3.getGasPrice()
    let gasPriceString = ethers.utils.formatUnits(gasPrice.toString(), 'gwei')
    return gasPriceString
  }
  async getBalance () {
    let balance = await this.web3.getBalance('ds56b56C2efEf8233dbDd6b5Cae27E4b14036Be6b0')
    console.log(balance.toString())
  }
  async getBlock () {
    let blockInfo = await this.web3.eth.getBlock(9392795)
    console.log(blockInfo)
  }
}

module.exports = EthModel
