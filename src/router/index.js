import Vue from 'vue'
import Router from 'vue-router'
// const _import = require('./_import_' + process.env.NODE_ENV)
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
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/login'), name: '登录NxAdmin', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // 锁屏
  {
    path: '/locks',
    hidden: true,
    name: '锁屏页',
    component: () => import('@/views/common/lock')
  },
  // 报表
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: { title: 'dashboard', icon: 'dashboard' }
      },
      {
        path: 'DiscountFigure',
        name: 'DiscountFigure',
        component: () => import('@/views/charts/DiscountFigure'),
        meta: { title: 'DiscountFigure', icon: 'dashboard' }
      },
      {
        path: 'columnar',
        name: 'columnar',
        component: () => import('@/views/charts/columnar'),
        meta: { title: 'columnar', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/myiframe',
    component: Layout,
    redirect: '/myiframe',
    children: [{
      path: ':routerPath',
      name: 'myiframe',
      component: () => import('@/components/nx-iframe'),
      meta: { title: 'thirdPartyWebsite', icon: 'people' }
    }]

  },
  {
    path: '/wel',
    component: Layout,
    meta: { title: 'wel', icon: 'wel' },
    children: [
      {
        path: 'wel',
        name: 'wel',
        component: () => import('@/views/page/wel'),
        meta: { title: 'wel', icon: 'wel' }
      }

    ]
  },

  // 表情包
  // {
  //   path: '/countenance',
  //   component: Layout,
  //   meta: { title: 'countenance', icon: 'example' },
  //   children: [
  //     {
  //       path: 'countenance',
  //       name: 'countenance',
  //       component: () => import('@/views/page/countenance'),
  //       meta: { title: 'countenance', icon: 'table' }
  //     }

  //   ]
  // },
  // {
  //   path: '/index',
  //   component: Layout,
  //   meta: { title: 'clipboard', icon: 'clipboard' },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'clipboard',
  //       component: () => import('@/views/clipboard/index'),
  //       meta: { title: 'clipboard', icon: 'clipboard' }
  //     }

  //   ]
  // },

  // 树形组件
  {
    path: '/treeMen',
    component: Layout,
    redirect: 'noredirect',
    name: 'treeMen-demo',
    meta: {
      title: 'treeMen',
      icon: 'component'
    },
    children: [
      {
        path: 'treeMen',
        name: 'treeMen-demo',
        component: () => import('@/views/tree/treeMen'),
        meta: { title: 'treeMen', icon: 'component' }
      }
    ]
  },
  // 图标组件
  {
    path: '/iconIndex',
    component: Layout,
    name: 'iconIndex',
    meta: {
      title: 'Icons',
      icon: 'icon'
    },
    children: [
      {
        path: 'iconIndex',
        name: 'iconIndex',
        component: () => import('@/views/svg-icons/iconIndex'),
        meta: { title: 'Icons', icon: 'icon' }
      }
    ]
  },
  // 组件
  {
    path: '/vueActual',
    component: Layout,
    redirect: '/vueActual/Pos',
    name: 'vueActual',
    meta: {
      title: 'vueActual',
      icon: 'shizhan'
    },
    children: [
      {
        path: 'Pos',
        name: 'Pos',
        component: () => import('@/views/vueActual/Pos'),
        meta: { title: 'vueActual', icon: 'shizhan' }
      }
    ]
  },
  // // 组件
  {
    path: '/components',
    component: Layout,
    redirect: '/components/dragKanban',
    name: 'Components',
    meta: {
      title: 'Components',
      icon: 'table'
    },
    children: [
      {
        path: 'dragKanban',
        name: 'dragKanban',
        component: () => import('@/views/components/dragKanban'),
        meta: { title: 'dragKanban' }
      },
      {
        path: 'markdown',
        name: 'markdown',
        component: () => import('@/views/components/markdown'),
        meta: { title: 'markdown' }
      },
      {
        path: 'backToTop',
        name: 'backToTop',
        component: () => import('@/views/components/backToTop'),
        meta: { title: 'backToTop' }
      },
      {
        path: 'clipboard',
        name: 'clipboard',
        component: () => import('@/views/clipboard/index'),
        meta: { title: 'clipboard', icon: 'clipboard' }
      },
      {
        path: 'mixin',
        name: 'componentMixin',
        component: () => import('@/views/components-demo/mixin'),
        meta: { title: 'componentMixin' }
      }
    ]
  },
  {
    path: '/Tabs',
    component: Layout,
    redirect: 'Tabs',
    name: 'Tabs',
    meta: { title: 'Tabs', icon: 'table' },
    children: [
      {
        path: 'Tabs',
        name: 'Tabs',
        component: () => import('@/views/table/Tabs'),
        meta: { title: 'Tabs', icon: 'tab' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/table/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'BaseForm',
        name: 'BaseForm',
        component: () => import('@/views/form/BaseForm'),
        meta: { title: 'BaseForm' }
      },
      {
        path: 'VueEditor',
        name: 'VueEditor',
        component: () => import('@/views/form/VueEditor'),
        meta: { title: 'VueEditor' }
      },
      {
        path: 'Upload',
        name: 'Upload',
        component: () => import('@/views/form/Upload'),
        meta: { title: 'Upload' }
      }
    ]
  },

  // 表格
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        path: 'complex-table',
        name: 'complex-table',
        component: () => import('@/views/table/complex-table'),
        meta: { title: 'complexTable' }
      },
      {
        path: 'TreeTable',
        name: 'TreeTable',
        component: () => import('@/views/table/tree-table/index'),
        meta: { title: 'treeTable' }
      }

    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    }]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
      { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }]
