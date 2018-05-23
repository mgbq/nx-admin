import Vue from 'vue'

Vue.config.productionTip = false

// 测试所有以 .spec.js 名称结尾的文件
// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// 要求除main.js之外的所有src文件进行覆盖
// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
const srcContext = require.context('../../src', true, /^\.\/(style$) /)
srcContext.keys().forEach(srcContext)
