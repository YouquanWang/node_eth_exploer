<template>
  <div class="index-box">
    <el-row class="top">
      <el-col :span="6">
        <div class="grid-content">
          <div class="content" style="margin-left: 0">
            <div class="title">区块高度</div>
            <div class="text">{{blockNumber}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="content">
            <div class="title">交易费</div>
            <div class="text">{{gasPrice}}Gwei</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="content">
            <div class="title">难度值</div>
            <div class="text">{{difficulty}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="content" style="margin-right: 0">
            <div class="title">哈希率</div>
            <div class="text">{{hashrate}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>区块高度</span>
            </div>
          </template>
          <el-table 
          :data="blockList"
           @row-click="toBlockDetail"
          style="width: 100%">
            <el-table-column label="区块高度" width="100px">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.number}}</span>
              </template>
            </el-table-column>
            <el-table-column label="区块哈希值">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.hash}}</span>
              </template>
            </el-table-column>
            <el-table-column width="80px" prop="transactionNum" label="交易次数"></el-table-column>
            <el-table-column
              label="区块生成者"
            >
             <template #default="scope">
                <span class="text-ellipsis">{{scope.row.miner}}</span>
              </template>
            </el-table-column>
            <el-table-column label="生成时间">
               <template #default="scope">
                <span class="text-ellipsis">{{dateFormat('yyyy-MM-dd hh:mm:ss',new Date(scope.row.timestamp*1000))}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>交易记录</span>
            </div>
          </template>
          <el-table 
          :data="transactionList" 
          @row-click="toTransactionDetail"
          style="width: 100%">
            <el-table-column prop="blockNumber" label="区块高度"></el-table-column>
            <el-table-column label="HASH">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.hash}}</span>
              </template>
            </el-table-column>
            <el-table-column label="转出地址">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.fromAddress}}</span>
              </template>
            </el-table-column>
            <el-table-column label="转入地址">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.toAddress}}</span>
              </template>
            </el-table-column>
            <el-table-column width="80px" label="数量">
               <template #default="scope">
                <span class="text-ellipsis">{{web3.utils.fromWei(scope.row.ethValue, 'ether')}} eth</span>
              </template>
            </el-table-column>
            <el-table-column label="时间">
               <template #default="scope">
                <span class="text-ellipsis">{{dateFormat('yyyy-MM-dd hh:mm:ss',new Date(scope.row.timestamp*1000))}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import {useRouter} from "vue-router"
import { getGasPrice, getHashrate, getBlockNumber, getBlockInfo, getBlockList, getTransactionList } from '@/api'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const data = reactive({
       blockNumber: 0,
       hashrate: 0,
       gasPrice: 0,
       difficulty: 0,
       blockList: [],
       transactionList: [],
       toBlockDetail: (row, column, event) => {
         router.push({name: 'BlockDetial', params: {blockNumber: row.number}})
       },
       toTransactionDetail: (row, column, event) =>{
         router.push({name: 'TransactionDetial', params: {hash: row.hash}})
       }
    });
    onMounted(() => {
      getGasPrice().then((res) => {
        data.gasPrice = res.data
      })
      getHashrate().then((res) => {
        data.hashrate = res.data
      })
      getBlockNumber().then((res) => {
        data.blockNumber = res.data
        return getBlockInfo({blockNumber: res.data})
      }).then((block) => {
        data.difficulty = block.data.difficulty
      })
      getBlockList().then((res) => {
        data.blockList = res.data
      })
      getTransactionList().then((res) => {
        data.transactionList = res.data
      })
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  margin-bottom: 30px;
}
.grid-content {
  .content {
    background: #fff;
    margin: 0 20px;
    padding: 20px;
    border-radius: 10px;
    .title {
      font-size: 18px;
      color: #666;
      margin-bottom: 5px;
    }
    .text {
      font-size: 26px;
      font-weight: bold;
      color: #333;
    }
  }
}
.card-header {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
</style>
