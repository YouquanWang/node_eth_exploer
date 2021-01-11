<template>
  <div class="block-box">
     <el-table :data="transactionList"
       @row-click="toDetail"
      style="width: 100%">
       <el-table-column label="交易哈希值">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.hash}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="blockNumber" width="100px" label="区块"></el-table-column>
            <el-table-column label="发送方">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.fromAddress}}</span>
              </template>
            </el-table-column>
            <el-table-column label="接收方">
              <template #default="scope">
                <span class="text-ellipsis">{{scope.row.toAddress}}</span>
              </template>
            </el-table-column>
            <el-table-column label="价值">
               <template #default="scope">
                <span class="text-ellipsis">{{web3.utils.fromWei(scope.row.ethValue, 'ether')}} eth</span>
              </template>
            </el-table-column>
            <el-table-column label="交易费用">
              <template #default="scope">
                <span class="text-ellipsis">{{web3.utils.fromWei(scope.row.gasPrice, 'Gwei')}} Gwei</span>
              </template>
            </el-table-column>
            <el-table-column label="时间">
               <template #default="scope">
                <span class="text-ellipsis">{{dateFormat('yyyy-MM-dd hh:mm:ss',new Date(scope.row.timestamp*1000))}}</span>
              </template>
            </el-table-column>
          </el-table>
           <div class="page-pagination-box">
            <el-pagination
                background
                :page-size="limit"
                layout="prev, pager, next"
                @current-change="currentChange"
                :current-page="Number(page)"
                :total="total">
              </el-pagination>
          </div>
  </div>
</template>

<script>
import {reactive, toRefs, onMounted} from "vue";
import {useRouter, useRoute, onBeforeRouteUpdate} from "vue-router"
import { getTransactionAllList } from '@/api'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
       page: route.query.page || 1,
       limit: 30,
       total: 0,
       transactionList: [],
       currentChange: (number) => {
         router.replace({name: 'Transaction', query: {page: number}})
       },
       toDetail: (row, column, event) => {
         router.push({name: 'TransactionDetial', params: {hash: row.hash}})
       }
    });
    onMounted(() => {
      getTransactionAllList({page: data.page, limit: data.limit}).then((res) => {
        data.transactionList = res.data.list
        data.total = res.data.total
      })
    })
    onBeforeRouteUpdate((to, from) => {
      data.page = to.query.page || 1
      getTransactionAllList({page: data.page, limit: data.limit}).then((res) => {
        data.transactionList = res.data.list
        data.total = res.data.total
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
.page-pagination-box{
  text-align: right;
  margin-top: 30px;
}
</style>
