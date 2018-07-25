<template>
  <nx-container class="container" type="full" scroll>
    <template slot="header">
      <el-radio-group v-model="showIndex" size="mini">
        <el-radio-button
          v-for="(item, index) in radioOptions"
          :key="index"
          :label="item.value">
          {{item.label}}
        </el-radio-button>
      </el-radio-group>
    </template>
    <el-row style="margin: -10px;"  class="icons-wrapper">
      <el-alert title="点击图标复制代码" type="info" class="d2-m-10" style="width: auto;"/>
      <el-col v-for="(iconItem, iconIndex) in iconShow.icon" :key="iconIndex" :span="6" class="d2-p-10"  >
        <nx-icon-cell :icon="iconItem"/>
      </el-col>
    </el-row>
  </nx-container>
</template>

<script>
import icon from '@/assets/library/font-awesome-4.7.0-icon/icon.js'
import nxIconCell from '@/components/nx-icon-cell/'
import nxContainer from '@/components/nx-container/'
export default {
  components: {
    nxIconCell,
    nxContainer
    // 'd2-icon-cell': () => import('./components/d2-icon-cell')
  },
  data() {
    return {
      icon,
      showIndex: 12
    }
  },
  computed: {
    iconShow() {
      return this.icon[this.showIndex]
    },
    radioOptions() {
      return this.icon.map((e, index) => ({
        label: e.title,
        value: index
      }))
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;
  .icons-wrapper {
    margin: 0 auto;
  }
  .icon-item {
    margin: 25px;
    height: 110px;
    text-align: center;
    width: 120px;
    float: left;
    font-size: 35px;
    color: #24292e;
    cursor: pointer;
  }
 
}
</style>
