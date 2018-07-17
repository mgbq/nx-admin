import Vue from 'vue'

import VCharts from 'v-charts'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '../static/css/iconfont/1.0.0/index.css' /* icofont*/

// css
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css
// 右键菜单
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import './mock' // simulation data

// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

import App from './App'

import router from './router'

import store from './store'

// Internationalization
import i18n from './lang'
import { global } from '@/global/global'
import {
  loadStyle
} from './utils/util'
import {
  iconfontUrl,
  iconfontVersion
} from '@/config/env'

import '@/icons' // icon

import '@/permission' // permission control

Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(ElementUI, { locale })
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// 加载用户主题
if (localStorage.getItem('themeValue')) {
  global.changeTheme(localStorage.getItem('themeValue'))
} else {
  global.changeTheme('default')
}
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
