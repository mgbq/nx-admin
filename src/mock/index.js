import Mock from 'mockjs'
import tableAPI from './table'
import loginAPI from './login'
// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})

// 登录相关
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 用户相关
Mock.mock(/\/user\/listpage/, 'get', tableAPI.getUserList)
Mock.mock(/\/user\/remove/, 'get', tableAPI.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', tableAPI.batchremove)
Mock.mock(/\/user\/add/, 'get', tableAPI.createUser)
Mock.mock(/\/user\/edit/, 'get', tableAPI.updateUser)
export default Mock
