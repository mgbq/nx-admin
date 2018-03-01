<template>
    <div class="sidebar">
        <el-menu  :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened>
            <template v-for="item in routes" v-if="!item.hidden&&item.children">
                <template v-if="item.subs">
                    <el-submenu :index="item.path">
                        <template slot="title"><i :class="item.meta.icon"></i>{{ item.meta.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                 <router-link :to="item.path">
                    <el-menu-item :index="item.path">
                        <i :class="item.meta.icon"></i>{{ item.meta.title }}
                    </el-menu-item>
                  </router-link>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'vSidebar',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  //   data() {
  //     return {
  //       items: [
  //         {
  //           icon: 'el-icon-menu',
  //           index: 'Readme',
  //           title: 'readme'
  //         },
  //         {
  //           icon: 'el-icon-setting',
  //           index: 'permission',
  //           title: '权限菜单'
  //         }
  //       ]
  //     }
  //   },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/permission', '')
    }
  }
}
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
