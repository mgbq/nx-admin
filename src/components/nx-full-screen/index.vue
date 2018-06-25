<template>
  <el-tooltip
    effect="dark"
    :content="isFullScreen ? '退出全屏' : '全屏'"
    placement="bottom">
    <el-button class="btn-text can-hover" type="text" @click="toggleFullScreen">
     <nx-icon v-if="isFullScreen" name="compress"/>
      <nx-icon v-else name="arrows-alt"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import nxIcon from '@/components/nx-icon'
export default {
  components: {
    nxIcon
  },
  name: 'nx-fullScreen',
  computed: {
    ...mapState({
      isFullScreen: state => state.fullScreen.isFullScreen
    })
  },
  methods: {
    ...mapMutations([
      'toggleFullScreen'
    ])
  }
}
</script>
<style lang="scss">

 .btn-text {
        color: #FFF;
        &.can-hover {
          &:hover {
            color: #FFEBA4;
            background-color: #00162D;
          }
        }
      }

</style>


