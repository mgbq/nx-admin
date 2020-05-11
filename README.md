

<p align="center">
  <img  src="https://github.com/mgbq/nx-admin/blob/master/src/assets/img/home/logo.png">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.3.2-brightgreen.svg" alt="element-ui">
  </a>
   <a href="https://travis-ci.org/mgbq/nx-admin" rel="nofollow">
    <img src="https://travis-ci.org/mgbq/nx-admin.svg?branch=master" alt="Build Status">
  </a>
    <a href="https://github.com/mgbq/nx-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mgbq/nx-admin.svg" alt="license">
  </a>
  <a href="https://github.com/mgbq/nx-admin/releases">
    <img src="https://img.shields.io/badge/release-1.2-blue.svg" alt="GitHub release">
  </a>
  
  > ## :gem: Vue自动化管理系统
</p>

简体中文 | [English](./README.en.md)


## 介绍
[nx-admin](https://mgbq.github.io/vue-permission/#/login) 是一个开源的管理系统前端集成方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element](https://github.com/ElemeFE/element)。它使用了最新的前端技术栈，内置了i18国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。最大程度上帮助个人，企业节省时间成本和费用开支。

[中文文档](https://mgbq.github.io/nx-admin-site/zh/)

**完整版**

[Github 仓库](https://github.com/mgbq/nx-admin) | 
[码云仓库](https://gitee.com/symgg/nx-admin) | 
[github预览地址](https://mgbq.github.io/vue-permission/#/login) |
[gitee预览地址](https://sdsdsy.gitee.io/nxadmin/)



<img src="./github/nx-admin.png" width="800px" height="400" alt="nx-admin">

**简化版**

[Github 仓库](https://github.com/mgbq/nxAdmin-template) | 
[码云仓库](https://gitee.com/symgg/nxAdmin-template) | 
[预览地址](https://mgbq.github.io/nxAdmin-template)

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 相关文档
[老板让我十分钟上手nx-admin](https://juejin.im/post/5b43226c51882519ad616c2a)

[Vue2.0实现的用户权限控制](http://blog.csdn.net/qq_32340877/article/details/79416344)

[Mock.js模拟登录和表格的增删改查](https://juejin.im/post/5b59804c5188251acb0d00bf)

[Vue2.0-基于elementui换肤[自定义主题]](https://blog.csdn.net/qq_32340877/article/details/80176987)

[Vue国际化处理 vue-i18n 以及项目自动切换中英文](https://blog.csdn.net/qq_32340877/article/details/80148913)

[搭建 Vue2 单元测试环境(karma+mocha+webpack3)](https://juejin.im/post/5b051519f265da0b8f62e94e)

[Vue实现首屏加载等待动画](https://juejin.im/post/5b336699e51d4558a846dcc2)

[Vue项目中添加锁屏功能](https://juejin.im/post/5b35e05ee51d4558a75ea159)

[Vue项目添加动态浏览器头部title](https://juejin.im/post/5b446e24e51d45194d4fce14)

**本项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill [详情](https://github.com/mgbq/nx-admin/wiki#babel-polyfill)**

**注意：该项目使用 element-ui@2.3.0+ 版本，所以最低兼容 vue@2.5.0+**


## 下载

git：`git clone https://github.com/mgbq/nx-admin.git`

npm：`npm install`


## 演示

测试账号:

``` bash
1. username: admin
   password: 任意
2. username: editor
   password: 任意
```

演示地址:

[vue实现的后台管理系统](https://mgbq.github.io/vue-permission/#/login)

> nx-admin project

nx-admin 是完全开源免费的管理系统集成方案，由 nxmin 在工作之余由兴趣驱动完成，如果你也一样喜欢前端开发，欢迎加入我们的讨论/学习群，群内可以提问答疑，分享学习资料或者随便扯淡

## 技术答疑，交流QQ群

群号 493671066 这里可以帮你答疑nx-admin这个项目各种疑惑，问题，防止发广告者，入群费设置为0.9元，请谅解，欢迎大家

<img src="./github/QqAndWeiXin.png" width="800px" height="420" alt="chat">

## 其他注意事项 ##
### 一、如果我不想用到上面的紫色颜色，那我怎么修改为自己喜欢的颜色呢？ ###

第一步： 修改代码地址为:[src/styles/variables](https://github.com/mgbq/nx-admin/blob/master/src/styles/variables.scss)里面的//sidebar注释部分

第二步： 修改代码地址为：[src/views/layout/components/Sidebar/index.vue](https://github.com/mgbq/nx-admin/blob/master/src/views/layout/components/Sidebar/index.vue)下面部分颜色代码即可。
```javaScript
<el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#6959CD"
      text-color="white"
      active-text-color="#42b983"
    >
```
### 二、如果我不想用到刷新加载动画怎么做呢？ ###

把index.html里面相关的[loader-wrappe](https://github.com/mgbq/nx-admin/blob/master/index.html#L245) 加载动画div 和相关css去掉即可。

### 三、如果我不想用到上面的某些组件呢，那我怎么在模板中删除掉不影响到其他功能呢？ ###

举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分三步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

```JavaScript
  {
        path: 'VueEditor',
        name: 'VueEditor',
        component: () => import('@/views/form/VueEditor'),
        meta: { title: 'VueEditor' }
  },
```

第二步：删除引入该组件的文件。在目录 src/view/form/ 删除 VueEditor.vue 文件。

第三步：卸载该组件。执行以下命令：
	
	npm un vue-quill-editor -S

完成。

## 功能
```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限

- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 锁屏
  - 疑问
  - 转到github
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地mock数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown

- Excel
  - 导出excel
  - 导出zip
  - 导入excel
  - 前端可视化excel

- 表格
  - 树形表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 返回顶部
  - 拖拽Dialog
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- Dashboard
- v-charts 图表
- Clipboard(剪贴复制)
- Markdown2html
- 首屏加载等待动画
- Fontawesome 图标库
- vuex本地持久化存储,封装h5的sessionStorage和localStorage
- 右键菜单
- github-emoji
- 第三方网站
- 动态文字说明

```

欢迎你为 nx-admin的开发作出贡献（代码编写/文档翻译）。

## 开发
```bash
# 克隆项目
git clone https://github.com/mgbq/nx-admin.git

# 安装依赖
npm install
   
# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
浏览器访问 http://localhost:9528

## 发布
```bash
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
```

## 其它
```bash
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```
## 捐赠 觉得不错 赏个咖啡 让作者打起精神 ~
<img src="./github/二维码.jpg" width="400px" height="460px" alt="捐赠扫一扫">

## 感谢
这个项目借鉴了[vueAdmin-template](https://github.com/PanJiaChen/vueAdmin-template),[d2admin](https://github.com/d2-projects/d2-admin),
[avue](https://gitee.com/smallweigit/avue)部分组件。

## License

[MIT](https://github.com/mgbq/nx-admin/blob/master/LICENSE)
Copyright (c) 2018-present nxmin
