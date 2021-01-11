<template>
  <div class="transaction-detial-box">
    <el-card class="box-card">
  <div slot="header">
     <div class="card-header">
         交易
     </div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">交易哈希:</div>
   <div class="value">{{transactionInfo.hash}}</div>
  </div>
  <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">状态:</div>
   <div class="value">{{transactionInfo.status ? '成功': '失败'}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">区块:</div>
   <div class="value">{{transactionInfo.blockNumber}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">时间戳:</div>
   <div class="value">{{dateFormat('yyyy-MM-dd hh:mm:ss',new Date(transactionInfo.timestamp*1000 || 0))}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">发送方:</div>
   <div class="value">{{transactionInfo.from}}</div>
  </div>
    <el-divider></el-divider>
  <div class="item flex-middle">
   <div class="title">接收方:</div>
   <div class="value">{{transactionInfo.to}}</div>
  </div>
   <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">价值:</div>
   <div class="value">{{web3.utils.fromWei(transactionInfo.value || '0', 'ether')}} eth</div>
  </div>
   <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">交易费用:</div>
   <div class="value">{{web3.utils.fromWei(`${transactionInfo.gasPrice * transactionInfo.gasUsed || 0}`, 'ether')}} eth</div>
  </div>
    <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">燃料价格:</div>
   <div class="value">{{web3.utils.fromWei(transactionInfo.gasPrice || '0', 'Gwei')}} Gwei</div>
  </div>
    <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">燃料限制:</div>
   <div class="value">{{transactionInfo.gas}}</div>
  </div>
    <el-divider></el-divider>
   <div class="item flex-middle">
   <div class="title">nonce:</div>
   <div class="value">{{transactionInfo.nonce}}</div>
  </div>
    <el-divider></el-divider>
    <div class="item flex-middle">
   <div class="title">数据输入:</div>
   <div class="value">{{transactionInfo.input}}</div>
  </div>
</el-card>

  </div>
</template>

<script>
import {reactive, toRefs, onMounted} from "vue";
import {useRouter, useRoute, onBeforeRouteUpdate} from "vue-router"
import { getTransactionInfo } from '@/api'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
       hash: route.params.hash,
       transactionInfo: {}
    });
    onMounted(() => {
      getTransactionInfo({hash: data.hash}).then((res) => {
        data.transactionInfo = res.data
      })
    })
    onBeforeRouteUpdate((to, from) => {
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
     word-break: break-all;
  }
}
</style>
