'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API:'"https://easy-mock.com/mock/5a72c1ecc76727050336e0bc/mdm/"',
})
