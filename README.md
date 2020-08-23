#### 使用nuxt.js 实现 realworld开源项目，只实现了一小部分

#### 同构渲染
`服务端`和`客户端渲染`，需要考虑持续化存储的问题，不能使用本地存储。只能使用`cookie`

#### 持久化存储

使用 `vuex` 和 `cookie`进行存储， 首先`vuex`仅仅只是在客户端进行存储，如果跳转页面或者初始化页面时，需要获取之前存储的数据，需要在 `actions.nuxtServerInit` 函数下，将`cookie`中的数据解析后再注入到 `vuex`中存储

#### 校验当前页面的权限
1. 需要使用`中间件` middleware, 首先在根节点的 middleware 目录下新建一个用于验证权限的文件 `auth.js` ,然后
```javscript 
export default function ({store,redirect}){
   if(!store.state.userInfo){
       redirect('/login')
   }
}
```
2. 写好文件之后，还需要在根目录下的`nuxt.config.js`进行注册,可以注入多个文件，放进数组中即可
```javascript
  ....
  router: {
    middleware: ['auth']
  }
```


