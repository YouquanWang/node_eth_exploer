<template>
  <el-container>
  <el-header>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#409eff"
  text-color="#fff"
  active-text-color="#fff">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
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
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
</el-menu>
  </el-header>
  <el-main>
    <router-view />
  </el-main>
</el-container>
  
</template>

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
