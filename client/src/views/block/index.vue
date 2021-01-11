<template>
  <div class="block-box">
     <el-table 
     :data="blockList"
     @row-click="toDetail"
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
            <el-table-column width="80px" prop="transactionNum" label="交易"></el-table-column>
            <el-table-column width="80px" prop="unclesNum" label="叔区块"></el-table-column>
            <el-table-column
              label="区块生成者"
            >
             <template #default="scope">
                <span class="text-ellipsis">{{scope.row.miner}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="gasLimit" width="100px" label="燃料限制"></el-table-column>
      <el-table-column label="燃料价值">
        <template #default="scope">
                <span class="text-ellipsis">{{web3.utils.fromWei(scope.row.gasUsed + '', 'Gwei')}} Gwei</span>
              </template>
      </el-table-column>
            <el-table-column label="生成时间">
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
import { getBlockAllList } from '@/api'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
       page: route.query.page || 1,
       limit: 30,
       total: 0,
       blockList: [],
       currentChange: (number) => {
         router.replace({name: 'Block', query: {page: number}})
       },
      toDetail: (row, column, event) => {
         router.push({name: 'BlockDetial', params: {blockNumber: row.number}})
       }
    });
    onMounted(() => {
      getBlockAllList({page: data.page, limit: data.limit}).then((res) => {
        data.blockList = res.data.list
        data.total = res.data.total
      })
    })
    onBeforeRouteUpdate((to, from) => {
      data.page = to.query.page || 1
      getBlockAllList({page: data.page, limit: data.limit}).then((res) => {
        data.blockList = res.data.list
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
