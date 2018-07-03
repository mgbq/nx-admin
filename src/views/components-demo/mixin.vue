<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Buttons</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn blue-btn" to="/components/index">Components</router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn light-blue-btn" to="/charts/index">Charts</router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn pink-btn" to="/excel/download">Excel</router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn green-btn" to="/example/table/complex-table">Table</router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn tiffany-btn" to="/form/edit-form">Form</router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn yellow-btn" to="/theme/index">Theme</router-link>
          </el-col>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top:50px;">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div style="height:100px;">
            <el-form :model="demo" :rules="demoRules">
              <el-form-item prop="title">
                <md-input icon="search" name="title" placeholder="输入标题" v-model="demo.title">标题</md-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>图片hover效果</span>
          </div>
          <div class="component-item">
            <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
              nx-admin
            </pan-thumb>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>水波纹 waves v-directive</span>
          </div>
          <div class="component-item">
            <el-button v-waves type="primary">水波纹效果</el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>hover text</span>
          </div>
          <div class="component-item">
            <mallki className="mallki-text" text="nx-admin"></mallki>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:50px;">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Share</span>
          </div>
          <div class="component-item" style="height:420px;">
            <dropdown-menu style="margin:0 auto;" title='系列文章' :items='articleList'></dropdown-menu>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PanThumb from '@/components/nx-pant-humb'
import MdInput from '@/components/nx-mdinput'
import Mallki from '@/components/nx-text-hover-effect'
import DropdownMenu from '@/components/nx-share'
import waves from '@/directive/waves/index.js' // 水波纹指令

export default {
  name: 'componentMixin-demo',
  components: {
    PanThumb,
    MdInput,
    Mallki,
    DropdownMenu
  },
  directives: {
    waves
  },
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('请输入六个字符'))
      } else {
        callback()
      }
    }
    return {
      demo: {
        title: ''
      },
      demoRules: {
        title: [{ required: true, trigger: 'change', validator: validate }]
      },
      articleList: [
        { title: 'Vue2.0实现的用户权限控制', href: 'http://blog.csdn.net/qq_32340877/article/details/79416344' },
        { title: 'elementui换肤自定义主题', href: 'https://blog.csdn.net/qq_32340877/article/details/80176987' },
        { title: 'Vue国际化 vue-i18n 中英文', href: 'https://blog.csdn.net/qq_32340877/article/details/80148913' },
        { title: '单元测试环境', href: 'https://juejin.im/post/5b051519f265da0b8f62e94e' },
        { title: 'Vue实现首屏加载等待动画', href: 'https://juejin.im/post/5b336699e51d4558a846dcc2' },
        { title: 'Vue项目中添加锁屏功能', href: 'https://juejin.im/post/5b35e05ee51d4558a75ea159' }
      ]
    }
  }
}
</script>

<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}
</style>
