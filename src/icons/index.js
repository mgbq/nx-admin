import Vue from 'vue'
import nxSvgIcon from '@/components/nx-svg-icon'// svg组件

// register globally
Vue.component('svg-icon', nxSvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
