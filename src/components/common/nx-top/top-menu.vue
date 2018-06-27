<template>
  <div class="pull-auto top-menu">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <template v-for="(item,index) in items">
        <el-menu-item :index="item.parentId+''" @click.native="openMenu(item)" :key="index">{{item.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { resolveUrlPath } from '@/utils/util'
import { mapGetters } from 'vuex'
export default {
  name: 'top-menu',
  data() {
    return {
      activeIndex: '0',
      items: [
        {
          label: '首页',
          href: '/wel/index',
          parentId: 0
        },
        {
          label: '设置',
          href: '/dev/index',
          parentId: 1
        },
        {
          label: '文档',
          href: 'https://www.kancloud.cn/smallwei/avue/',
          parentId: 3
        }
      ]
    }
  },
  created() {},
  computed: {
    ...mapGetters(['tagCurrent', 'menu'])
  },
  methods: {
    openMenu(item) {
      this.$store.dispatch('GetMenu', item.parentId).then(data => {
        let itemActive
        const childItemActive = 0
        if (item.href) {
          itemActive = item
        } else {
          if (this.menu[childItemActive].length === 0) {
            itemActive = this.menu[childItemActive]
          } else {
            itemActive = this.menu[childItemActive].children[childItemActive]
          }
        }
        this.$router.push({
          path: resolveUrlPath(itemActive.href, itemActive.label)
        })
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.top-menu {
  margin-top: -4px;
  box-sizing: border-box;
}
</style>