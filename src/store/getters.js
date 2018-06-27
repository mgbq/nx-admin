const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  isLock: state => state.user.isLock,
  lockPasswd: state => state.user.lockPasswd,
  roles: state => state.user.roles,
  website: state => state.common.website,
  isCollapse: state => state.common.isCollapse,
  isFullScren: state => state.common.isFullScren,
  userInfo: state => state.user.userInfo,
  tag: state => state.tags.tag,
  tagList: state => state.tags.tagList,
  tagCurrent: state => state.tags.tagCurrent,
  tagWel: state => state.tags.tagWel,
  menu: state => state.user.menu
}
export default getters
