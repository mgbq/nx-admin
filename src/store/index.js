import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import fullScreen from './modules/fullScreen'
import tags from './modules/tags'
import common from './modules/common'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    fullScreen,
    common,
    tags
  },
  getters
})

export default store
