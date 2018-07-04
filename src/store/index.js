import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import common from './modules/common'
import getters from './getters'
import fullScreen from './modules/fullScreen'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    common,
    fullScreen,
    permission
  },
  getters
})

export default store
