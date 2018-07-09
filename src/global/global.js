// const themeArray = require('./themeArray');
import themeArray from './themeArray'
// 封装一些全局元素。如全站通用功能函数和http请求等

export const global = {
  /**
         * 切换主题函数
         */
  changeTheme(themeValue) {
    // 切换主题导航背景色
    // switch (themeValue) {
    //   case 'Blue':
    //   /* eslint-disable */
    //     $('.navbar').css('background-color', '#409eff')
    //     break
    //   case 'Green':
    //     $('.navbar').css('background-color', '#009a61')
    //     break
    //   case 'Red':
    //     $('.navbar').css('background-color', '#f44336')
    //     break
    //   case 'Purple':
    //     $('.navbar').css('background-color', '#7B7DE5')
    //     break
    //   default:
    //     $('.navbar').css('background-color', '#21baa9')
    //     break
    // }
    // console.log('切换主题颜色值：',themeValue,that.staticPath,JSON.stringify(themeArray) );
    // 需要移到单独的文件存放
    var cssArray = themeArray
    for (let i = 0, len = cssArray.length; i < len; i++) {
      var itemPath = 'static/theme/' + themeValue.toLowerCase() + '/' + cssArray[i].toLowerCase() + '.css'

      loadCss(itemPath)
    }

    localStorage.setItem('themeValue', themeValue)

    function loadCss(path) {
      var head = document.getElementsByTagName('head')[0]
      var link = document.createElement('link')
      link.href = path
      link.rel = 'stylesheet'
      link.type = 'text/css'
      head.appendChild(link)
    }
  }
}

// export default global
