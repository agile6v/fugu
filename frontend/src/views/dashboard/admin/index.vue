<template>
  <div class="dashboard-container">
    <el-row :gutter="16">
      <el-col :lg="6" :md="12">
        <VmStateOverView color="#41b883" icon="container_cluster" title="Clusters" count="10"></VmStateOverView>
      </el-col>
      <el-col :lg="6" :md="12">
        <VmStateOverView color="#1d8ce0" icon="container_node" title="Nodes" count="100"></VmStateOverView>
      </el-col>
      <el-col :lg="6" :md="12">
        <VmStateOverView color="#EE9572" icon="job" title="Jobs" count="90"></VmStateOverView>
      </el-col>
      <el-col :lg="6" :md="12">
        <VmStateOverView color="#8470FF" icon="container" title="Containers" count="10000"></VmStateOverView>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <label>Clusters: &nbsp;&nbsp;</label>
          <el-select v-model="value" placeholder="Please Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <div class="chart-wrapper">
        <el-row :gutter="32">
          <el-col :xs="24" :sm="24" :lg="8">
              <pie-chart resource_type="CPU"></pie-chart>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8">
              <pie-chart resource_type="Mem"></pie-chart>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8">
              <pie-chart resource_type="Disk"></pie-chart>
          </el-col>
        </el-row>
      </div>
      <el-table :data="clusterInfo" style="width: 100%" show-header="false" stripe :row-class-name="tableRowClassName">
        <el-table-column prop="key">
        </el-table-column>
        <el-table-column prop="value">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import VmStateOverView from './components/vm-state-overview'
import PieChart from './components/PieChart'

export default {
  name: 'dashboard-admin',
  components: {
    PieChart,
    VmStateOverView
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: 'cluster-agile6v-1'
      }, {
        value: '选项2',
        label: 'cluster-agile6v-2'
      }, {
        value: '选项3',
        label: 'cluster-agile6v-3'
      }, {
        value: '选项4',
        label: 'cluster-agile6v-4'
      }, {
        value: '选项5',
        label: 'cluster-agile6v-5'
      }],
      value: '',
      clusterInfo: [ {
        key: 'Type',
        value: 'DCOS'
      }, {
        key: 'Name',
        value: 'agile6v-testing'
      }, {
        key: 'Mesos-Master',
        value: 'http://127.0.0.1:5050'
      }, {
        key: 'Marathon',
        value: 'http://127.0.0.1:8080'
      }, {
        key: 'Chronos',
        value: 'http://127.0.0.1:9090'
      }, {
        key: 'Jobs',
        value: '50'
      }, {
        key: 'Nodes',
        value: '100'
      }, {
        key: 'Containers',
        value: '1000'
      }]
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 !== 0) {
        return 'warning-row'
      } else {
        return ''
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  padding: 20px;
  background-color: rgb(240, 242, 245);
  .box-card {
    margin-top: 20px;
  }
  .chart-wrapper {
    background: #fff;
    padding: 0px 16px 0;
    .filter-container {
      display: table;
    }
  }
  .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>
