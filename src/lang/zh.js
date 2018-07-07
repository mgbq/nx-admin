
export default {
  // 导航栏
  navbar: {
    title: '自动化管理系统',
    languageSwitch: '语言切换',
    theme: '主题'
  },
  skin: {
    Blue: '天空蓝',
    Green: '典雅绿',
    Red: '樱桃红',
    Purple: '贵族紫',
    Default: '默认'
  },
  route: {
    from: '表单',
    BaseForm: 'from表单',
    VueEditor: '文本编辑',
    Upload: '文件上传',
    Components: '组件',
    dragKanban: '可拖拽看板',
    Table: '表格',
    componentMixin: 'componentMixin',
    markdown: 'Markdown',
    treeMen: '树形菜单',
    backToTop: '返回顶部',
    dashboard: '报表',
    treeMenu: '树形菜单',
    wel: '动态文字',
    Lockscreenpage: '锁屏页',
    countenance: '表情',
    clipboard: '复制',
    Chartmember: '图表成员',
    permission: '权限测试页',
    pagePermission: '页面权限',
    directivePermission: '按钮权限',
    complexTable: '综合Table',
    treeTable: '树形表格',
    errorPages: '错误页面',
    page401: '401',
    page404: '404'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限'
  },
  componentss: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  }
}
