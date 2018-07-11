
# nx-admin

[![npm](https://img.shields.io/npm/v/vue-access-control.svg)](https://www.npmjs.com/package/vue-access-control/)  [![license](https://img.shields.io/github/license/tower1229/Vue-Access-Control.svg)]()

> :gem: Vue自动化管理系统

![logo](https://github.com/mgbq/nx-admin/blob/master/src/assets/img/home/logo.png)

## 介绍
 
nx-admin是一套基于Vue/Vue-Router/axios/Vuex/Element-ui开源的管理系统前端集成方案


**完整版**

[Github 仓库](https://github.com/mgbq/nx-admin) | 
[码云仓库](https://gitee.com/symgg/nx-admin) | 
[预览地址](https://mgbq.github.io/vue-permission/#/login)

<img src="./github/nx-admin.png" width="800px" height="400" alt="nx-admin">

#### 因为也是纯粹的写写前端页面,所以数据方面用的是mock.js,真实的模拟请求。

#### 这个项目用了花裤衩的模板[vueAdmin-template](https://github.com/PanJiaChen/vueAdmin-template)

####  技术栈：

##### vue + webpack + vuex + axios

#### 结构：
- build: webpack配置
- config: 项目配置参数
- common 共用的
- components:组件
- api :增删改查的接口
- mock：模拟数据
- src assets: 静态资源文件，存放图片啥的 
- router.js: 路由表 
- store: 状态管理 
- utils: 常用工具类封装
- views: 视图页面
-  static: 静态文件 存放 favicon.ico 等等


## 相关文档
[老板让我十分钟上手nx-admin](https://juejin.im/post/5b43226c51882519ad616c2a)

[Vue2.0实现的用户权限控制](http://blog.csdn.net/qq_32340877/article/details/79416344)

[Vue2.0-基于elementui换肤[自定义主题]](https://blog.csdn.net/qq_32340877/article/details/80176987)

[Vue国际化处理 vue-i18n 以及项目自动切换中英文](https://blog.csdn.net/qq_32340877/article/details/80148913)

[搭建 Vue2 单元测试环境(karma+mocha+webpack3)](https://juejin.im/post/5b051519f265da0b8f62e94e)

[Vue实现首屏加载等待动画](https://juejin.im/post/5b336699e51d4558a846dcc2)

[Vue项目中添加锁屏功能](https://juejin.im/post/5b35e05ee51d4558a75ea159)

[Vue项目添加动态浏览器头部title](https://juejin.im/post/5b446e24e51d45194d4fce14)


## 捐赠 觉得不错 赏个咖啡 让作者打起精神 ~
<img src="./github/二维码.jpg" width="400px" height="400px" alt="捐赠扫一扫">

## 下载

git：`git clone https://github.com/mgbq/nx-admin.git`

npm：`npm i nx-admin`


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

QQ群

群号 493671066 欢迎大家

<img src="./github/QqAndWeiXin.png" width="800px" height="400" alt="chat">

## 功能

* 首屏加载等待动画 避免首次加载白屏尴尬
* 简约主题
* 面包屑
* 树形表格
* 锁屏功能
* 多 tab 页结构
* 每个插件和组件都配有介绍文档
* 登陆和注销
* 根据路由自动生成菜单
* 可折叠侧边栏
* 方便的菜单设置
* 多国语言支持
* 富文本编辑器
* Markdown 编辑器
* 全屏功能
* Fontawesome 图标库
* 图标选择器（组件）
* 自动引入下载的 SVG 图标
* 前端假数据支持（ mock ）
* 图表自适应可拖拽大小的卡片容器（示例）
* 简化剪贴板操作
* 简化Cookie操作
* 时间日期计算工具
* 导入 Excel （ xlsx 格式 + csv 格式 ）
* 数据导出 Excel （ xlsx 格式 + csv 格式 ）
* 数据导出文本
* 数字动画
* 可拖拽调整大小的切分布局
* 可拖拽调整大小和位置的网格布局
* 提供三种方便的页面容器组件（正常卡片，隐形容器，填满页面）
* 代码高亮显示
* GitHub 样式的 markdown 显示组件
* markdown 内代码高亮
* 为 markdown 扩展了百度云链接解析和优化显示
* 自定义滚动条和滚动控制
* 内置4种主题
* 公用样式抽离，方便的主题定制
* 打包后随意目录部署（已经做好兼容设置）

## TODO

nx-admin 仍然处于开发中，这里有一些计划：

* 分离出简化版本
* 增加右上角通知中心
* 增加一些实例页面以提供业务页面布局建议
* 添加图表库
* 右键菜单组件
* `1.1.0 完成` 抽离项目里的文档，集中存放在文档站点
* `1.1.0 完成` 对主界面进行一次完善，调整整体布局和颜色

欢迎你为 nx-admin的开发作出贡献（代码编写/文档翻译）。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
