const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  isLock: state => state.user.isLock,
  lockPasswd: state => state.user.lockPasswd,
  roles: state => state.user.roles

}
export default getters
