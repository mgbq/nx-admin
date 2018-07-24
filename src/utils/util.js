/**
 * 动态插入css
 */

export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}
/**
 * 设置浏览器头部标题
 */
export const setTitle = function(title) {
  title = title ? `${title}` : 'NxAdmin'
  window.document.title = title + '-nxAdmin'
}

