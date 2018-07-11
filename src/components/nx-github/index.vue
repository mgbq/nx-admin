<template>
  <div>
    <el-tooltip effect="dark" placement="bottom">
      <div slot="content">
        <a class="link" :href="url" target="_blank">转到 Github</a>
      </div>
      <el-button class="btn-text can-hover" type="text" @click="handleClick">
        <nx-icon name="github" style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script>
import nxIcon from '@/components/nx-icon'
export default {
  name: 'nx-github',
  components: { nxIcon },
  data() {
    return {
      url: 'https://github.com/mgbq/nx-admin'
    }
  },
  methods: {
    handleClick() {
      window.open(this.url)
    }
  }
}
</script>


<style lang="scss" scoped>
.link {
  color: #FFF;
  text-decoration: none;
}
</style>
