<template>
  <div class="block-detial-box">
    <el-card class="box-card" v-if="blockInfo">
  <div slot="header">
     <div class="card-header">
         区块
     </div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">区块高度:</div>
   <div class="value"> <el-input-number v-model="blockNumber" size="small" controls-position="right" @change="currentChange" :min="1" :max="maxBlockNumber"></el-input-number></div>
  </div>
  <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">生成时间:</div>
   <div class="value">{{dateFormat('yyyy-MM-dd hh:mm:ss',new Date(blockInfo.timestamp*1000 || 0))}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">交易:</div>
   <div class="value">{{blockInfo.transactionNum}}个交易在这个区块中</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">矿工:</div>
   <div class="value">{{blockInfo.miner}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">难度值:</div>
   <div class="value">{{blockInfo.difficulty}}</div>
  </div>
   <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">总难度值:</div>
   <div class="value">{{blockInfo.totalDifficulty}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">容量:</div>
   <div class="value">{{blockInfo.size}}</div>
  </div>
    <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">燃料限制:</div>
   <div class="value">{{blockInfo.gasLimit}}</div>
  </div>
    <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">额外数据:</div>
   <div class="value">{{blockInfo.extraData}}</div>
  </div>
    <el-divider></el-divider>
    <div class="item flex-middle">
   <div class="title">哈希:</div>
   <div class="value">{{blockInfo.hash}}</div>
  </div>
    <el-divider></el-divider>
    <div class="item flex-middle">
   <div class="title">父区块哈希:</div>
   <div class="value">{{blockInfo.parentHash}}</div>
  </div>
    <el-divider></el-divider>
    <div class="item flex-middle">
   <div class="title">(Sha3)叔区块:</div>
   <div class="value">{{blockInfo.sha3Uncles}}</div>
  </div>
    <el-divider></el-divider>
    <div class="item flex-middle">
   <div class="title">nonce:</div>
   <div class="value">{{blockInfo.nonce}}</div>
  </div>
</el-card>

  </div>
</template>

<script>
import {reactive, toRefs, onMounted} from "vue";
import {useRouter, useRoute, onBeforeRouteUpdate} from "vue-router"
import { getBlockInfo, getBlockNumber } from '@/api'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
       blockNumber: Number(route.params.blockNumber),
       maxBlockNumber: 10000000000000,
       blockInfo: null,
       currentChange: (number) => {
         router.replace({name: 'BlockDetial', params: {blockNumber: number}})
       }
    });
     getBlockNumber().then((res) => {
        data.maxBlockNumber = res.data
      })
      getBlockInfo({blockNumber: data.blockNumber}).then((res) => {
           data.blockInfo = res.data
        })
    onMounted(() => {
    })
    onBeforeRouteUpdate((to, from) => {
      data.blockNumber = Number(to.params.blockNumber)
      data.blockInfo = null
      getBlockInfo({blockNumber: data.blockNumber}).then((res) => {
        data.blockInfo = res.data
      })
      getBlockNumber().then((res) => {
        data.maxBlockNumber = res.data + ''
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
.card-header{
  font-size: 18px;
  font-weight: 700;
  text-align: left;
}
.item{
  font-size: 16px;
  color: #333;
  text-align: left;
  .title{
    width: 20%;
  }
  .value{
     flex: 1;
  }
}
</style>
