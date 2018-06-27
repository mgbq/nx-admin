import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: '登录页面',
    hidden: true,
    component: _import('login/index')
  },
  {
    path: '/lock',
    hidden: true,
    name: '锁屏页',
    component: _import('common/lock/index')
  },
  // 首页
  {
    path: '/wel',
    index: 'wel',
    meta: {
      title: 'wel',
      icon: 'el-icon-view'
    },
    component: resolve => require(['../components/common/index'], resolve),
    children: [
      {
        name: 'wel',
        path: '/',
        meta: { title: 'wel', icon: 'el-icon-view' },
        component: _import('login/wel'),
        children: []
      }

    ]
  },

  // 报表页面
  {
    path: '/report',
    index: 'report',
    meta: {
      title: 'report',
      icon: 'el-icon-tickets'
    },
    component: resolve => require(['../components/common/index.vue'], resolve),
    children: [
      {
        name: 'report',
        path: '/',
        meta: { title: 'report', icon: 'el-icon-tickets' },
        component: _import('page/report'),
        children: []
      }
    ]
  },

  // 树形菜单
  {
    path: '/treeMenu',
    // name: 'Readmehome',
    index: 'treeMenu',
    meta: {
      title: 'treeMenu',
      icon: 'el-icon-edit-outline'
    },
    component: resolve => require(['../components/common/index.vue'], resolve),
    children: [
      {
        name: 'treeMenu',
        path: '/',
        meta: { title: 'treeMenu', icon: 'el-icon-edit-outline' },
        component: _import('tree/treeMenu')
      }
    ]
  },
  {
    path: '/Readme',
    // name: 'Readmehome',
    index: 'Readme',
    meta: {
      title: 'Readme',
      icon: 'el-icon-menu'
    },
    component: resolve => require(['../components/common/index.vue'], resolve),
    children: [
      {
        name: 'Readme',
        path: '/',
        meta: { title: 'Readme', icon: 'el-icon-menu' },
        component: _import('page/Readme')
      }
    ]
  },
  {
    path: '/404',
    index: '404',
    meta: {
      title: '404page',
      icon: 'el-icon-circle-close'
    },
    component: resolve => require(['../components/common/index.vue'], resolve),
    children: [
      {
        name: '404page',
        path: '/404',
        meta: { title: 'Readme', icon: 'el-icon-circle-close' },
        component: _import('errorPage/404')
      }
    ]
  }

]

export default new Router({
  routes: constantRouterMap
})
// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/permission',
    // name: 'permissionhome',
    meta: {
      title: 'permission',
      icon: 'el-icon-setting',
      roles: ['admin']
    },
    component: resolve => require(['../components/common/index.vue'], resolve),
    children: [
      {
        name: 'permission',
        path: '/permission',
        meta: {
          title: 'permission', icon: 'el-icon-menu', roles: ['admin']
        },
        component: _import('page/permission')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

