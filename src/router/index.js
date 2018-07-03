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
    path: '/report',
    component: Layout,
    meta: { title: '报表', icon: 'example' },
    children: [
      {
        path: 'report',
        name: 'report',
        component: _import('page/report'),
        meta: { title: '报表', icon: 'table' }
      }

    ]
  },
  // {
  //   path: '/treeMenu',
  //   component: Layout,
  //   meta: { title: '树形菜单', icon: 'example' },
  //   children: [
  //     {
  //       path: 'treeMenu',
  //       name: 'treeMenu',
  //       component: _import('tree/treeMenu'),
  //       meta: { title: '树形菜单', icon: 'table' }
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
    meta: { title: '图表成员', icon: 'tree' },
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
  {
    path: '/orgMembersNav',
    component: Layout,
    redirect: '/orgMembersNav/table',
    name: 'orgMembersNav',
    meta: { title: '组织成员', icon: 'tree' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'index',
        name: '组织成员',
        component: () => import('@/views/form/index'),
        meta: { title: '组织成员', icon: 'form' }
      }
    ]
  },
  {
    path: '/dataRoot',
    component: Layout,
    redirect: '/dataRoot/table',
    name: 'dataRoot',
    meta: { title: '数据中心', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Treexx',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/schedule',
    component: Layout,
    redirect: '/schedule/table',
    name: 'schedule',
    meta: { title: '进度管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '进度计划', icon: 'table' }
      },
      {
        path: 'tree',
        name: '进度对比',
        component: () => import('@/views/tree/index'),
        meta: { title: '进度对比', icon: 'tree' }
      }
    ]
  },
  {
    path: '/qualityManagement',
    component: Layout,
    redirect: '/qualityManagement/table',
    name: 'qualityManagement',
    meta: { title: '质量管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '质量概况', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'qualityInspection',
        component: () => import('@/views/tree/index'),
        meta: { title: '质量检查', icon: 'tree' }
      }, {
        path: 'tree',
        name: 'qualityTrack',
        component: () => import('@/views/tree/index'),
        meta: { title: '质量跟踪', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Thequalityreport',
        component: () => import('@/views/tree/index'),
        meta: { title: '质量报表', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'massDistribution',
        component: () => import('@/views/tree/index'),
        meta: { title: '质量分布', icon: 'tree' }
      }
    ]
  },
  {
    path: '/securityManagement',
    component: Layout,
    redirect: '/securityManagement/table',
    name: 'securityManagement',
    meta: { title: '安全管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '安全概况',
        component: () => import('@/views/table/index'),
        meta: { title: '安全概况', icon: 'table' }
      },
      {
        path: 'tree',
        name: '安全记录',
        component: () => import('@/views/tree/index'),
        meta: { title: '安全记录', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '安全监控', icon: 'tree' }
      }, {
        path: 'tree',
        name: '安全教育',
        component: () => import('@/views/tree/index'),
        meta: { title: '安全教育', icon: 'tree' }
      },
      {
        path: 'tree',
        name: '安全报表',
        component: () => import('@/views/tree/index'),
        meta: { title: '安全报表', icon: 'tree' }
      }
    ]
  },
  {
    path: '/contractManagement',
    component: Layout,
    redirect: '/contractManagement/table',
    name: 'contractManagement',
    meta: { title: '合同管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '合同记录', icon: 'table' }
      },
      {
        path: 'tree',
        name: '工程清单',
        component: () => import('@/views/tree/index'),
        meta: { title: '工程清单', icon: 'tree' }
      }
    ]
  },
  {
    path: '/resourceManagement',
    component: Layout,
    redirect: '/resourceManagement/table',
    name: 'resourceManagement',
    meta: { title: '资源管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '人工', icon: 'table' }
      },
      {
        path: 'tree',
        name: '材料',
        component: () => import('@/views/tree/index'),
        meta: { title: '材料', icon: 'tree' }
      },
      {
        path: 'tree',
        name: '机械',
        component: () => import('@/views/tree/index'),
        meta: { title: '机械', icon: 'tree' }
      }
    ]
  },
  {
    path: '/documentManagement',
    component: Layout,
    redirect: '/documentManagement/table',
    name: 'documentManagement',
    meta: { title: '文档管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'wendan',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/systemManagement',
    component: Layout,
    redirect: '/systemManagement/table',
    name: 'systemManagement',
    meta: { title: '系统管理', icon: 'system' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'XX',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/userManagement',
    component: Layout,
    redirect: '/userManagement/table',
    name: 'userManagement',
    meta: { title: '人员管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'renyuan',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
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

