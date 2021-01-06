<template>
  <div class="block-box">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="交易哈希值"></el-table-column>
      <el-table-column prop="name" label="区块"></el-table-column>
      <el-table-column prop="name" label="块龄"></el-table-column>
      <el-table-column prop="name" label="发送方"></el-table-column>
      <el-table-column prop="name" label="接收方"></el-table-column>
      <el-table-column prop="name" label="价值"></el-table-column>
      <el-table-column prop="address" label="交易费用"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
