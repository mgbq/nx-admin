<template>
  <el-button-group>
    <el-button v-if="title" size="mini" @click="$open(link)">{{title}}</el-button>
    <el-button size="mini" @click="$open(link)">
      <nx-icon :name="icon"/>
      {{link}}
    </el-button>
  </el-button-group>
</template>

<script>
import nxIcon from '@/components/nx-icon'
export default {
  components: { nxIcon },
  name: 'nx-demo-link-btn',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: 'link'
    },
    link: {
      type: String,
      required: false,
      default: 'https://github.com/mgbq'
    }
  }
}
</script>
