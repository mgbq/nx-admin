import Vue from 'vue'
import Router from 'vue-router'

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
    component: resolve => require(['../views/login/index.vue'], resolve)
  },
  {
    path: '/lock',
    hidden: true,
    name: '锁屏页',
    component: resolve => require(['../components/common/lock/index.vue'], resolve)
  },
  // {
  //   path: '/404',
  //   component: resolve => require(['../views/errorPage/404.vue'], resolve)
  // },
  // 首页
  {
    path: '/wel',
    // name: 'Readmehome',
    index: 'wel',
    meta: {
      title: 'wel',
      icon: 'el-icon-view'
    },
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'wel',
        path: '/',
        meta: { title: 'wel', icon: 'el-icon-view' },
        component: resolve => require(['../views/login/wel.vue'], resolve)
      }
    ]
  },

  // 报表页面
  {
    path: '/report',
    // name: 'Readmehome',
    index: 'report',
    meta: {
      title: 'report',
      icon: 'el-icon-tickets'
    },
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'report',
        path: '/',
        meta: { title: 'report', icon: 'el-icon-tickets' },
        component: resolve => require(['../views/page/report.vue'], resolve)
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
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'treeMenu',
        path: '/',
        meta: { title: 'treeMenu', icon: 'el-icon-edit-outline' },
        component: resolve => require(['../views/tree/treeMenu.vue'], resolve)
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
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'Readme',
        path: '/',
        meta: { title: 'Readme', icon: 'el-icon-menu' },
        component: resolve => require(['../views/page/Readme.vue'], resolve)
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
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'permission',
        path: '/permission',
        meta: {
          title: 'permission', icon: 'el-icon-menu', roles: ['admin']
        },
        component: resolve => require(['../views/page/permission.vue'], resolve)
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
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: '404page',
        path: '/404',
        meta: { title: 'Readme', icon: 'el-icon-circle-close' },
        component: resolve => require(['../views/errorPage/404.vue'], resolve)
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

