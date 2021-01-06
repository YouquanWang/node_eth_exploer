<template>
  <div class="header-box">
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
  </div>
</template>
