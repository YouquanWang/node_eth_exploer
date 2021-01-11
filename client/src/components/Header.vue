<template>
  <div class="header-box">
    <el-row>
       <el-col :span="4"
        ><div class="grid-content flex-middle">
          <el-image class="img-box"></el-image>
          </div>
       </el-col>
      <el-col :span="12"
        ><div class="grid-content">
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#409eff"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/block">区块</el-menu-item>
            <el-menu-item index="/transaction">交易</el-menu-item>
            <!-- <el-submenu index="2">
    <template #title>我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template #title>选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
          </el-menu>
        </div></el-col>
      <el-col :span="8"
        ><div class="grid-content flex-middle">
           <el-input
                v-model="search"
                placeholder="区块号/交易HASH"
              ></el-input>
              <el-button style="margin: 0 20px 0 10px" @click="onSubmit">搜索</el-button>
        </div></el-col>
    </el-row>
  </div>
</template>

<script>
import {reactive, toRefs, getCurrentInstance} from "vue";
import {useRouter, useRoute} from "vue-router"
import { getTransactionAllList } from '@/api'
import { ElMessage } from 'element-plus'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const route = useRoute()
    const {ctx} = getCurrentInstance()
    const data = reactive({
      search: '',
      onSubmit: () => {
        if (!data.search) {
          ElMessage.error('请先输入内容');
        }
        if(ctx.web3.utils.isHex(data.search)) {
          router.push({name: 'TransactionDetial', params: {hash: data.search}})
        } else if(Number(data.search)) {
           router.push({name: 'BlockDetial', params: {blockNumber: data.search}})
        } else {
          ElMessage.error('请先输入正确的搜索内容');
        }
      }
    });
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
};
</script>

<style lang="scss" scoped>
.header-box{
  background: #409eff;
  .grid-content{
    height: 100%;
    .el-form--inline .el-form-item{
      margin-bottom: 0;
    }
    .el-menu.el-menu--horizontal{
      border: 0
    }
    .img-box{
      width: 70%;
      height: 40px;
      padding-left: 20px;
    }
  }
}
</style>
