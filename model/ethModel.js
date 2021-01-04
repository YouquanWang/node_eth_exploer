const ethers = require('ethers')
const fs = require('fs')

class EthModel {
  constructor () {
    this.WSLock = false
    this.initWS()
  }
  initWS () {
    // this.provider = new ethers.providers.JsonRpcProvider('http://192.168.1.46:8545');
    this.provider = new ethers.providers.InfuraProvider('ropsten', '68715df044514d4eb102c4abdcdb9a68');
    // this.getBlockNumber()
    // this.getGasPrice()
    this.getBlock()
    // this.getBalance()
  }
  async getBlockNumber () {
    let blockNumber = await this.provider.getBlockNumber()
    console.log(blockNumber)
    return blockNumber
  }
  async getGasPrice () {
    let gasPrice = await this.provider.getGasPrice()
    let gasPriceString = ethers.utils.formatUnits(gasPrice.toString(), 'gwei')
    return gasPriceString
  }
  async getBalance () {
    let balance = await this.provider.getBalance('ds56b56C2efEf8233dbDd6b5Cae27E4b14036Be6b0')
    console.log(balance.toString())
  }
  async getBlock () {
    let blockInfo = await this.provider.getBlock(9392255)
    console.log(blockInfo)
  }
}

module.exports = EthModel
