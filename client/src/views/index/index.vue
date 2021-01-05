<template>
  <div class="index-box">
    <el-row class="top">
      <el-col :span="6">
        <div class="grid-content">
          <div class="content" style="margin-left: 0">
            <div class="title">区块高度</div>
            <div class="text">120000</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="content">
            <div class="title">交易费</div>
            <div class="text">20Gwei</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="content">
            <div class="title">难度值</div>
            <div class="text">20Gwei</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="content" style="margin-right: 0">
            <div class="title">哈希率</div>
            <div class="text">20Gwei</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>区块高度</span>
            </div>
          </template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="区块高度"></el-table-column>
            <el-table-column prop="name" label="区块哈希值"></el-table-column>
            <el-table-column prop="name" label="交易次数"></el-table-column>
            <el-table-column
              prop="address"
              label="区块生成者"
            ></el-table-column>
            <el-table-column prop="address" label="生成时间"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>交易记录</span>
            </div>
          </template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="区块高度"></el-table-column>
            <el-table-column prop="name" label="HASH"></el-table-column>
            <el-table-column prop="name" label="转出地址"></el-table-column>
            <el-table-column prop="address" label="转入地址"></el-table-column>
            <el-table-column prop="address" label="数量"></el-table-column>
            <el-table-column prop="address" label="时间"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.top {
  margin-bottom: 30px;
}
.grid-content {
  .content {
    background: #fff;
    margin: 0 20px;
    padding: 20px;
    border-radius: 10px;
    .title {
      font-size: 18px;
      color: #666;
      margin-bottom: 5px;
    }
    .text {
      font-size: 26px;
      font-weight: bold;
      color: #333;
    }
  }
}
.card-header {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
</style>
