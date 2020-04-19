<template>
  <div class="icons-container">
    <p class="warn-content">
      <a
        href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/icon.html"
        target="_blank"
      >svg组件参考 vue-element-admin Add and use</a>
    </p>
    <div class="icons-wrapper">
      <div
        v-for="item of svgIcons"
        :key="item"
        @click="handleClipboard(generateIconCode(item),$event)"
      >
        <el-tooltip placement="top">
          <div slot="content">{{ generateIconCode(item) }}</div>
          <div class="icon-item">
            <svg-icon class-name="disabled" :icon-class="item" />
            <span>{{ item }}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons.js'

export default {
  name: 'Icons',
  data() {
    return {
      svgIcons
    }
  },
  mounted() {},
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    handleClipboard(text, event) {
      clipboard(text, event)
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
  span {
    display: block;
    font-size: 25px;
    margin-top: 10px;
  }
  .disabled {
    pointer-events: none;
  }
}
</style>
