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
    path: '/lock',
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
      }
    ]
  },
  // 图表
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/DiscountFigure',
    name: 'charts',
    meta: { title: 'charts', icon: 'chart' },
    children: [
      {
        path: 'DiscountFigure',
        name: 'DiscountFigure',
        component: () => import('@/views/charts/DiscountFigure'),
        meta: { title: 'DiscountFigure', icon: 'discounting' }
      },
      {
        path: 'columnar',
        name: 'columnar',
        component: () => import('@/views/charts/columnar'),
        meta: { title: 'columnar', icon: 'columnar' }
      },
      {
        path: 'barGraph',
        name: 'barGraph',
        component: () => import('@/views/charts/barGraph'),
        meta: { title: 'barGraph', icon: 'barGraph' }
      },
      {
        path: 'pieChart',
        name: 'pieChart',
        component: () => import('@/views/charts/pieChart'),
        meta: { title: 'pieChart', icon: 'pieChart' }
      },
      {
        path: 'ringChart',
        name: 'ringChart',
        component: () => import('@/views/charts/ringChart'),
        meta: { title: 'ringChart', icon: 'ringChart' }
      },
      {
        path: 'waterfallCharts',
        name: 'waterfallCharts',
        component: () => import('@/views/charts/waterfallCharts'),
        meta: { title: 'waterfallCharts', icon: 'waterfallCharts' }
      },
      {
        path: 'funnelCharts',
        name: 'funnelCharts',
        component: () => import('@/views/charts/funnelCharts'),
        meta: { title: 'funnelCharts', icon: 'funnelCharts' }
      },
      {
        path: 'radarCharts',
        name: 'radarCharts',
        component: () => import('@/views/charts/radarCharts'),
        meta: { title: 'radarCharts', icon: 'radarCharts' }
      },
      {
        path: 'sankeyChart',
        name: 'sankeyChart',
        component: () => import('@/views/charts/sankeyChart'),
        meta: { title: 'sankeyChart', icon: 'sankeyChart' }
      },
      {
        path: 'heatmapChart',
        name: 'heatmapChart',
        component: () => import('@/views/charts/heatmapChart'),
        meta: { title: 'heatmapChart', icon: 'heatmapChart' }
      },
      {
        path: 'scatterChart',
        name: 'scatterChart',
        component: () => import('@/views/charts/scatterChart'),
        meta: { title: 'scatterChart', icon: 'scatterChart' }
      },
      {
        path: 'candleChart',
        name: 'candleChart',
        component: () => import('@/views/charts/candleChart'),
        meta: { title: 'candleChart', icon: 'candleChart' }
      },
      {
        path: 'gaugeChart',
        name: 'gaugeChart',
        component: () => import('@/views/charts/gaugeChart'),
        meta: { title: 'gaugeChart', icon: 'gaugeChart' }
      },
      {
        path: 'treeChart',
        name: 'treeChart',
        component: () => import('@/views/charts/treeChart'),
        meta: { title: 'treeChart', icon: 'treeChart' }
      }
    ]
  },
  // 地图
  {
    path: '/map',
    component: Layout,
    redirect: '/map/pointAccumulationMap',
    name: 'baidumap',
    meta: {
      title: 'baidumap',
      icon: 'baidumap'
    },
    children: [
      {
        path: 'pointMap',
        name: 'pointMap',
        component: () => import('@/views/map/pointMap'),
        meta: { title: 'pointMap', icon: 'pointMap' }
      },
      {
        path: 'cityLlistMap',
        name: 'cityLlistMap',
        component: () => import('@/views/map/cityLlistMap'),
        meta: { title: 'cityLlistMap', icon: 'cityLlistMap' }
      },
      {
        path: 'roadBookMap',
        name: 'roadBookMap',
        component: () => import('@/views/map/roadBookMap'),
        meta: { title: 'roadBookMap', icon: 'roadBookMap' }
      },
      {
        path: 'gpsMap',
        name: 'gpsMap',
        component: () => import('@/views/map/gpsMap'),
        meta: { title: 'gpsMap', icon: 'gpsMap' }
      }
    ]
  },
  // 第三方官网
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
  // pdf说明
  {
    path: '/pdfTest',
    component: Layout,
    redirect: '/pdfTest/pdf',
    children: [{
      path: 'pdf',
      name: 'pdf',
      component: () => import('@/views/pdfTest/index'),
      meta: { title: 'PDF', icon: 'pdf' }
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
  //   path: '/emoji',
  //   component: Layout,
  //   meta: { title: 'emoji', icon: 'emoji' },
  //   children: [
  //     {
  //       path: 'emoji',
  //       name: 'emoji',
  //       component: () => import('@/views/githubemoji'),
  //       meta: { title: 'emoji', icon: 'emoji' }
  //     }

  //   ]
  // },
  // 树形组件
  {
    path: '/treeMen',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'treeMen',
      icon: 'TreeMean'
    },
    children: [
      {
        path: 'treeMen',
        name: 'treeMen-demo',
        component: () => import('@/views/tree/treeMen'),
        meta: { title: 'treeMen', icon: 'TreeMean' }
      }
    ]
  },
  // 图标组件
  {
    path: '/icons',
    component: Layout,
    redirect: '/icons/iconIndex',
    name: 'icons',
    meta: {
      title: 'Icons',
      icon: 'icon'
    },
    children: [
      {
        path: 'iconIndex',
        name: 'iconIndex',
        component: () => import('@/views/icons/svg-icons/iconIndex'),
        meta: { title: 'svgicons', icon: 'icon' }
      },
      {
        path: 'font-awesome',
        name: 'font-awesome',
        component: () => import('@/views/icons/font-awesome/'),
        meta: { title: 'fontawesome', icon: 'font-awesome' }
      },
      {
        path: 'AliIcons',
        name: 'AliIcons',
        component: () => import('@/views/icons/AliIcons/'),
        meta: { title: 'AliIcons', icon: 'AliIcons' }
      }
    ]
  },
  // 实战
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
  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: '/components/dragKanban',
    name: 'Components',
    meta: {
      title: 'Components',
      icon: 'component'
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
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/components/index'),
        meta: { title: 'HightLightinViewer' }
      },
      {
        path: 'countup',
        name: 'countup',
        component: () => import('@/views/components/countup/'),
        meta: { title: 'Digitalanimation' }
      }
    ]
  },
  // 表格
  {
    path: '/Tabs',
    component: Layout,
    redirect: 'Tabs',
    meta: { title: 'Tabs', icon: 'tab' },
    children: [
      {
        path: 'Tabs',
        name: 'Tabs',
        component: () => import('@/views/table/Tabs'),
        meta: { title: 'Tabs', icon: 'tab' }
      }
    ]
  },

  // 滚动定位
  {
    path: '/better-scroll',
    component: Layout,
    redirect: 'better-scroll/to',
    meta: { title: 'better-scroll', icon: 'better-scroll' },
    children: [
      {
        path: 'to',
        name: 'to',
        component: () => import('@/views/better-scroll/to'),
        meta: { title: 'Rollingpositioning', icon: 'Rollingpositioning' }
      }
    ]
  },
  // 表单
  {
    path: '/form',
    component: Layout,
    redirect: '/form/BaseForm',
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
  // 右菜单
  {
    path: '/contextmenu',
    component: Layout,
    redirect: '/contextmenu/simple',
    name: 'contextmenu',
    meta: {
      title: 'contextmenu',
      icon: 'right-mean'
    },
    children: [
      {
        path: 'simple',
        name: 'simple',
        component: () => import('@/views/contextmenu/simple'),
        meta: { title: 'simple' }
      },
      {
        path: 'divier',
        name: 'divier',
        component: () => import('@/views/contextmenu/divier'),
        meta: { title: 'divier' }
      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/contextmenu/group'),
        meta: { title: 'group' }
      },
      {
        path: 'submenu',
        name: 'submenu',
        component: () => import('@/views/contextmenu/submenu'),
        meta: { title: 'submenu' }
      },
      {
        path: 'disabled',
        name: 'disabled',
        component: () => import('@/views/contextmenu/disabled'),
        meta: { title: 'disabled' }
      },
      {
        path: 'custom-trigger',
        name: 'customtrigger',
        component: () => import('@/views/contextmenu/custom-trigger'),
        meta: { title: 'customtrigger' }
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
  },
  //
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/exportExcel',
    name: 'excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'exportExcel',
        name: 'exportExcel',
        component: () => import('@/views/excel/exportExcel'),
        meta: { title: 'exportExcel' }
      },
      {
        path: 'selectExcel',
        name: 'selectExcel',
        component: () => import('@/views/excel/selectExcel'),
        meta: { title: 'selectExcel' }
      },
      {
        path: 'uploadExcel',
        name: 'uploadExcel',
        component: () => import('@/views/excel/uploadExcel'),
        meta: { title: 'uploadExcel' }
      }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: 'zip',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/zip/index'),
        meta: { title: 'zip', icon: 'zip' }
      }
    ]
  },
  {
    path: '/i18n-demo',
    component: Layout,
    redirect: 'i18n-demo',
    children: [
      {
        path: 'indexLang',
        name: 'indexLang',
        component: () => import('@/views/i18n-demo/indexLang'),
        meta: { title: 'i18n', icon: 'international' }
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
    redirect: '/permission/page',
    name: 'permission',
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
  // 错误日志
  {
    path: '/errorLog',
    component: Layout,

    children: [
      {
        path: 'errorLog',
        name: 'errorLog',
        component: () => import('@/views/errorLog/errorLog'),
        meta: { title: 'Errorlog', icon: 'errorLog' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }]
