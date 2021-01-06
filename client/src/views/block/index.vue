<template>
  <div class="block-box">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="区块"></el-table-column>
      <el-table-column prop="name" label="块龄"></el-table-column>
      <el-table-column prop="name" label="交易"></el-table-column>
      <el-table-column prop="name" label="叔区块"></el-table-column>
      <el-table-column prop="address" label="区块生成者"></el-table-column>
      <el-table-column prop="name" label="燃料限制"></el-table-column>
      <el-table-column prop="address" label="燃料价值"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
