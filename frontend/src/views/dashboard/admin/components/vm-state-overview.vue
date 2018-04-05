<template>
  <el-row class="vm-state-overview" type="flex">
    <el-col class="symbol" :style="{ backgroundColor: color }">
      <div class="card-panel-icon-wrapper">
        <svg-icon :icon-class="icon" class-name="card-panel-icon" />
      </div>
    </el-col>
    <el-col class="value">
      <h1 class="count">{{ count }}</h1>
      <p>{{ title }}</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'StateOverView',
  props: ['color', 'icon', 'title', 'count']
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vm-state-overview{
  background-color: white;
  border-radius: 4px;
  min-height: 100px;
  overflow: hidden;
  .symbol{
    color: white;
    font-size: 45px;
    background-color: #41b883;
    display: flex;
    align-items: center;
    justify-content: center;
    .card-panel-icon-wrapper {
      transition: all 0.38s ease-out;
      border-radius: 6px;
      float: left;
      font-size: 63px;
    }
  }
  .value{
    color: #99a9c0;
    text-align: center;
    flex-direction: column;

  }
}

</style>