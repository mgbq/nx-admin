
**背景**
在我们的系统中可能会遇到打开第三方网站的问题，我们采用iframe组件去实现，跳转打开后就会嵌入到vue路由当中,已tag标签挂载到系统中，当作系统的一部分

**组件路径**
路径：.\src\components\iframe\iframe.vue
    
**调用方法**
~~~
const iframe={
	title:'http://www.baidu.com',
    name:'百度'
}
this.$router.push(`/myiframe/urlPath?src=${iframe.title}&name=${iframe.name}`);
~~~

**效果图**
![百度效果图](https://gitee.com/smallweigit/avue/raw/master/static/cdn/images/avue-iframe.png)