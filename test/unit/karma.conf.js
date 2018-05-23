var webpackConfig = require('../../build/webpack.test.config')

module.exports = function(config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // 浏览器
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    // 测试框架
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    // 测试报告
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files: ['./index.js'],
    // 预处理器 karma-webpack
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
      // 'test/unit/**/*.spec.js': ['webpack']
    },
    // 不显示 `webpack` 打包日志信息
    webpackMiddleware: {
      noInfo: true
    },
    // Webpack中间件
    webpackServer: {
      noInfo: true
    },
    // Webpack配置
    webpack: webpackConfig,
    // 测试覆盖率报告
    // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
