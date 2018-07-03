import Mock from 'mockjs'

const userDB = [
  {
    username: 'admin',
    password: '123456',
    name: '管理员',
    token: ['admin', 'editor']
  }
]

function GetRequest(url) {
  const parment = []
  if (url.indexOf('?') !== -1) { // 判断是否有参数
    var str = url.substr(1) // 从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
    const strs = str.split('=') // 用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
    console.log(strs[1]) // 直接弹出第一个参数 （如果有多个参数 还要进行循环的）
    parment.push(strs[1])
  }
  return parment
}

Mock.mock('/user/login', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  const user = userDB.find(e => e.username === bodyObj.username && e.password === bodyObj.password)
  if (user) {
    return {
      code: 0,
      message: '登陆成功',
      data: {
        ...user,
        token: 'admin'
      }
    }
  } else {
    return {
      code: 401,
      message: '用户名或密码错误'
    }
  }
})

Mock.mock(/\?token=/, 'get', ({ url, type, body }) => {
  console.log('url' + url)
  const token = GetRequest(url)
  if (token[0] === 'admin') {
    return {
      code: 0,
      data: {
        roles: ['admin'],
        avatar: 'https://raw.githubusercontent.com/mgbq/nx-admin/master/src/assets/img/home/logo.png',
        name: 'admin'
      }
    }
  } else if (token[0] === 'editor') {
    return {
      code: 0,
      name: 'editor',
      data: {
        roles: ['editor']
      }
    }
  } else {
    return {
      code: 401,
      message: '错误'
    }
  }
})
Mock.mock('/user/logout', 'post', ({ url, type, body }) => {
  return {
    code: 0,
    message: '成功'
  }
})
