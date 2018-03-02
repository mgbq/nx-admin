
# vue-permission

[![npm](https://img.shields.io/npm/v/vue-access-control.svg)](https://www.npmjs.com/package/vue-access-control/)  [![license](https://img.shields.io/github/license/tower1229/Vue-Access-Control.svg)]()

> :gem: Vue权限后台系统

![logo](https://github.com/tower1229/tower1229.github.io/raw/master/asset/vsc-logo.png)

## 介绍

vue-permission是一套基于Vue/Vue-Router/axios/Vuex实现的前端用户权限控制。
#### 因为也是纯粹的写写前端页面,所以数据方面用的是easymock.js,真实的模拟请求。
#### 这个项目用到的
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


## 文档

[Vue2.0实现的用户权限控制](http://blog.csdn.net/qq_32340877/article/details/79416344)

## 捐赠
![微信扫一扫](http://img.blog.csdn.net/20180301190740227?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzIzNDA4Nzc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 下载

git：`git clone https://github.com/mgbq/vue-permission.git`

npm：`npm i vue-permission`


## 演示

测试账号:

``` bash
1. username: admin
   password: 任意
2. username: editor
   password: 任意
```

演示地址:

[vue实现的权限系统](https://mgbq.github.io/vue-permission/#/login)

>   vue-permission project

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
