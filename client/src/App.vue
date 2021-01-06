<template>
  <el-container>
  <el-header>
   <Header />
  </el-header>
  <el-main>
    <router-view />
  </el-main>
</el-container>
  
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
@import './assets/style/common.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el-header{
    padding: 0;
  }
}
</style>
