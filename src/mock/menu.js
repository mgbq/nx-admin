const first = [{
  id: 13,
  label: '权限测试页',
  href: '/permission',
  icon: 'icon-quanxian',
  meta: {
    roles: ['admin']
  },
  children: []
}, {
  id: 14,
  label: '数据展示',
  href: '/report',
  icon: 'icon-shujuzhanshi2',
  children: []
}, {
  id: 2,
  label: '第三方网站',
  href: '',
  icon: 'icon-iframe',
  meta: {},
  children: [{
    id: 3,
    label: '百度',
    href: 'https://www.baidu.com',
    icon: 'icon-baidu1',
    children: []
  }, {
    id: 4,
    label: '搜狐',
    href: 'http://www.shouhu.com',
    icon: 'icon-souhu',
    children: []
  }, {
    id: 5,
    label: '360',
    href: 'http://www.360.com',
    icon: 'icon-msnui-360',
    children: []

  }]
}, {
  id: 6,
  label: '表格&表单',
  href: '',
  icon: 'icon-biaoge',
  meta: {},
  children: [{
    id: 16,
    label: '表格',
    href: '/table/index6',
    query: {
      a: 1
    },
    icon: 'icon-biaoge',
    meta: {},
    children: []
  }, {
    id: 9,
    label: '生成器',
    href: `/table/generator`,
    icon: 'icon-huanyingye',
    meta: {},
    children: []
  }, {
    id: 9,
    label: '表单',
    href: '/forms/index',
    query: {
      a: 1
    },
    icon: 'icon-biaodan',
    meta: {},
    children: []
  }]
}, {
  id: 7,
  label: '阿里图标',
  href: '/iconfont/index',
  icon: 'icon-changyonglogo27',
  meta: {},
  children: []
}, {
  id: 15,
  label: '高级路由',
  href: '#',
  icon: 'icon-iconset0265',
  meta: {},
  children: [{
    id: 16,
    label: '动态路由',
    href: '/advanced-router/mutative-router',
    icon: 'icon-dongtai',
    children: []
  }, {
    id: 17,
    label: '参数路由',
    href: '/advanced-router/argument-page',
    icon: 'icon-canshu',
    children: []
  }]
}, {
  id: 8,
  label: '综合错误',
  href: '#',
  icon: 'icon-cuowu',
  meta: {},
  children: [{
    id: 14,
    label: '错误日志',
    href: '/errlog/index',
    icon: 'icon-rizhi',
    children: []
  }, {
    id: 15,
    label: '错误页面',
    href: '/errlog/page',
    icon: 'icon-cuowutishitubiao',
    children: []
  }]
}]
const second = [{
  id: 23,
  label: '环境变量',
  icon: 'icon-dongtai',
  href: '/dev/index',
  meta: {

  },
  children: []
}, {
  id: 24,
  label: '数据持久化',
  href: `/store/index`,
  icon: 'icon-huanyingye',
  meta: {},
  children: []
}, {
  id: 25,
  label: '剪切板',
  href: `/clipboard/index`,
  icon: 'icon-canshu',
  meta: {},
  children: []
}, {
  id: 9,
  label: '系统管理',
  icon: 'icon-liuliangyunpingtaitubiao08',
  meta: {

  },
  children: [{
    id: 20,
    label: '用户管理',
    href: '/admin/user',
    icon: 'icon-yonghuguanli',
    children: []
  }, {
    id: 21,
    label: '角色管理',
    href: '/admin/role',
    icon: 'icon-jiaoseguanli',
    children: []
  },
  {
    id: 22,
    label: '菜单管理',
    href: '/admin/menu',
    icon: 'icon-caidanguanli',
    children: []
  }
  ]
}]
export const menu = [first, second]
