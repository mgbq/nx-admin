export default {
  title: 'nx-admin',
  logo: 'N',
  author: 'BY nxmin',
  whiteList: ['/login', '/404', '/401', '/lock'],
  lockPage: '/lock',
  info: {
    title: 'nx-admin',
    list: [
      'nx-admin 是一个基于XXXX工程可视化管理平台，采用token交互验证方式。',
      '您可以 nx-admin 为基础，不只限制于vue的页面，你可以嵌入任意第三方网站，基于iframe框架。',
      'nx-admin 构建简单上手快，最大程度上帮助企业节省时间成本和费用开支。',
      '技术答疑QQ群，为了提高入群的门槛，象征性收取0.9元：493671066'
    ]
  },
  wel: {
    title: 'nx-admin 通用管理系统快速开发框架',
    list: [
      'vuex本地持久化存储,封装h5的sessionStorage和localStorage',
      '加入了本地离线的包引入方法去引入vue，vue-router等第三方包',
      '支持SSR服务端渲染(express)',
      '支持阿里巴巴图标库在线调用，自动同步图标',
      '支持iframe嵌套第三方网站',
      '支持js动态可配CRUD和FORM,节约大量开发成本，配置字典接口自动匹配字典',
      '支持多种登录方式,本地验证码校验和服务端验证码校验',
      '全局错误日志记录',
      'scss模块化开发',
      '增加系统管理模板(用户管理,角色管理,菜单管理——基于本框架的crud组件自动生成)',
      '打包后docker一键部署脚本基于nginx镜像（具体的可以修改./src/docker/Dockerfile）'
    ]
  }
}
