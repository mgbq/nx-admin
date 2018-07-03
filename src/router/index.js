import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // 锁屏
  {
    path: '/lock',
    hidden: true,
    name: '锁屏页',
    component: resolve => require(['../views/common/lock/index.vue'], resolve)
  },
  {
    path: '/',
    component: Layout,
    redirect: '/report/report',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/wel',
    component: Layout,
    redirect: '/wel/wel',
    name: 'wel',
    hidden: true,
    children: [{
      path: 'wel',
      component: () => import('@/views/login/wel')
    }]
  },
  {
    path: '/report',
    component: Layout,
    meta: { title: 'report', icon: 'example' },
    children: [
      {
        path: 'report',
        name: 'report',
        component: _import('page/report'),
        meta: { title: 'report', icon: 'table' }
      }

    ]
  },
  // 表情
  {
    path: '/countenance',
    component: Layout,
    meta: { title: 'countenance', icon: 'example' },
    children: [
      {
        path: 'countenance',
        name: 'countenance',
        component: _import('page/countenance'),
        meta: { title: 'countenance', icon: 'table' }
      }

    ]
  },
  // {
  //   path: '/treeMenu',
  //   component: Layout,
  //   meta: { title: 'treeMenu', icon: 'example' },
  //   children: [
  //     {
  //       path: 'treeMenu',
  //       name: 'treeMenu',
  //       component: _import('tree/treeMenu'),
  //       meta: { title: 'treeMenu', icon: 'table' }
  //     }

  //   ]
  // },
  // copy
  {
    path: '/index',
    component: Layout,
    meta: { title: 'clipboard', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'clipboard',
        component: _import('clipboard/index'),
        meta: { title: 'clipboard', icon: 'form' }
      }

    ]
  },
  // 小组件
  {
    path: '/mixin',
    component: Layout,
    meta: { title: 'clipboard', icon: 'form' },
    children: [
      {
        path: 'mixin',
        name: 'mixin',
        component: _import('components-demo/mixin'),
        meta: { title: 'mixin', icon: 'form' }
      }

    ]
  },
  {
    path: '/orgMembersNav',
    component: Layout,
    redirect: '/orgMembersNav/histogram',
    name: 'orgMembersNav',
    meta: { title: 'Chartmember', icon: 'tree' },
    children: [
      {
        path: 'histogram',
        name: 'histogram',
        component: () => import('@/views/charts/histogram'),
        meta: { title: 'histogram', icon: 'table' }
      }
    ]
  },
  //
  {
    path: '/Table',
    component: Layout,
    meta: { title: 'Table', icon: 'form' },
    children: [
      {
        path: 'Table',
        name: 'Table',
        component: _import('table/Table'),
        meta: { title: 'Table', icon: 'form' }
      }

    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

