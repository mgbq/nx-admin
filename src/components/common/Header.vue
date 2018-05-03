<template>
   <el-menu class="header" :style="{ 'background-color': primaryColor }">
        <div class="logo">{{$t('navbar.title')}}</div>
        <div class="user-info">
            <lang-select class="right-menu-item"></lang-select>
            <skinComp class="right-menu-item"></skinComp>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg"> {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-menu>
</template>
<script>
import LangSelect from '@/components/LangSelect'
import skinComp from '@/components/skin'
export default {
  components: {
    LangSelect,
    skinComp
  },
  created() {
    // 加载用户 Header主题
    if (localStorage.getItem('themeValue')) {
      switch (localStorage.getItem('themeValue')) {
        case 'blue':
          /* eslint-disable */
          this.primaryColor = '#409eff'
          break
        case 'green':
          this.primaryColor = '#009a61'
          break
        case 'red':
          this.primaryColor = '#f44336'
          break
        case 'purple':
          this.primaryColor = '#7B7DE5'
          break
        default:
          this.primaryColor = '#21baa9'
          break
      }
    } else {
      this.primaryColor = '#21baa9'
    }
  },
  data() {
    return {
      name: 'linxin'
    }
  },
  computed: {
    username() {
      const username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'loginout') {
        localStorage.removeItem('ms_username')
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
.right-menu-item {
  display: inline-block;
  margin: 0 8px;
}
</style>
