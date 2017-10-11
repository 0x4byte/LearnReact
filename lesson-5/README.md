## 项目工程介绍

用脚手架生成项目: [请移步](https://github.com/NewDadaFE/generator-react-impression)

### node_modules

> 所有依赖包所在位置。执行`yarn install`或`npm install`后，会生成此文件夹。

### Yarn或Npm包管理器

> 包管理器，可以类比于java的maven，python的pip
>
> `yarn.lock` 版本号锁定，为了跨机器安装保持一致的版本
>
> `package.json`包管理描述文件，使用yarn或npm时自动生成，描述项目名称、项目版本、项目依赖等信息。
>
> [yarn 官方参考](https://yarnpkg.com/zh-Hans/docs/usage)
>
> [npm 官方参考](https://docs.npmjs.com/getting-started/what-is-npm)

### webpack.*.js文件

> webpack配置文件
>
> webpack是一个js应用程序的模块打包器，它将递归的查找模块的依赖关系，并最终打包成一个js文件(通常是一个)，在webpack下，任何文件都是一个模块。
>
> [官方参考](https://webpack.js.org/)

### .babelrc文件

> babel配置文件
>
> 因react中使用新的Es6语法及Jsx，所以需要使用工具转换成Es5的语法，以提高浏览器兼容性。
>
> [babel 官方参考](http://babeljs.io/)

### .editorconfig文件

> 编辑器风格配置，为了保持统一的编码风格
>
> 比如说：trim_trailing_whitespace=true，去除所有多余空格
>
> [官方参考](http://editorconfig.org/)

### .eslintrc.js 文件

> javascript代码检查工具eslint配置文件，为保持统一的代码规范。
>
> [官方参考](https://eslint.org/docs/user-guide/getting-started)

### .postcssrc.js 文件

> postcss配置文件
>
> postcss是一个使用js插件处理styles的工具, 比如说比较流行的`autoprefixer`插件补充CSS前缀。
>
> [官方参考](https://github.com/postcss/postcss/blob/master/README.cn.md)

### browserslist 文件

> autoprefixer运行时会依据这个文件中配置的浏览器版本，添加相应的css前缀。

### deploy.js文件

> 自定义的发布脚本文件，将编译打包后的资源js、css、html发到七牛cdn上。

### src

> 项目源代码位置，平时写项目也基本只要动这个。

## 项目架构

>index.html 落地页
>
>main.js、provider.js 真实dom和虚拟dom链接、热加载重渲染
>
>store.js 配置redux的store
>
>reducers.js  所有reducer的合并文件
>
>routers.js  所有路由配置文件

目前大多数redux开发者所推荐的项目架构有：

1. `Rails-style`: “actions”、“constants”、“reducers”、“containers” 以及 “components” 分属不同的文件夹
2. domain-style: 为每个功能或者域创建单独的文件夹，可能会为某些文件类型创建子文件夹
3. “Ducks”：类似于 Domain-style，但是明确地将 action、 reducer 绑定在一起，通常将它们定义在同一文件内。

目前我们公司使用的是，dock模式，但当action较多时，会偏向domain-style模式，所以是dock和domain-style混合的。

大家看到的两个文件夹:

> app: 会放一些公共的组件、样式、整个layout
>
> home: 某个具体项目（home只是举例），以后开发某项功能，以文件夹进行区分。



## 开发一个项目功能时

一般而言一个项目文件夹会包含:

> containers文件夹: 包含各个子container
>
> components文件夹: 包含项目中复用的或纯展示的组件
>
> action.js 文件: 包含所有项目的action
>
> reducer.js 文件: 包含所有reducer, 与action对应, action函数比较少时，可以考虑将reducer、action合并成一个文件。
>
> index.js 可以作为所有containers的入口文件

### 需要注意的：

#### 处理reducer时

请`返回一个新的更新后的对象，而不是直接去修改原始的 state tree`

```jsx
// 直接修改
switch(type) {
  case 'COUNTER_INCREMENT':
  	state.total += 2;
    return state;
  default:
  	...
}
// 返回更新后的新对象，对然来对象无影响 
switch(type) {
  case 'COUNTER_INCREMENT':
    const { total } = state;
    
  	state = { ...state, total: total + 2 }
    return state;
  default:
  	...
}
```

解释下：

##### 不可变数据(immutable)

> 可变数据带来的问题
>
> 1. redux中考虑性能问题，对对象使用浅比较(即不会对深层嵌套的对象进行逐级比较)，这会导致对象或数组的数据改变后，组件不会重新render
> 2. 对于时间旅行，redux-dev-tools调试工具期望能回放state的记录，但一些突变的数据会导致历史state的改变。
>
> [参考](http://redux.js.org/docs/recipes/reducers/PrerequisiteConcepts.html)
```jsx
const a = { orderIds: [1, 2, 3, 4] }
const oldA = a;

a.orderIds.push(5);

console.log(oldA === a); // true, 数据没有更新
```

##### 创建不可变数据

1. 使用对象或数组的扩展运算符

```jsx
const state = { orderList: [1, 2, 3] }
// 使用扩展运算符产生新对象
state = {
    ...state,
    orderList: [
    	...orderList,
  		4,
	],
}
```

2. 使用工具库 [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable)

```jsx
import dotProp from 'dot-prop-immutable'

const state = { orderList: [1, 2, 3] }

// 合并/添加
dotProp.merge(state, 'orderList', [4, 5])
// 修改值
dotProp.set(state, 'orderList', [6, 6, 6])
```

3. 使用[immutableJs](https://facebook.github.io/immutable-js/)

> 完全的immutable，结构共享，可节省内存，但有学习成本，与原生js混合操作需要转换

#### 创建actions时

使用[redux-actions](https://github.com/reduxactions/redux-actions)创建符合的flux标准的action, 免去中间的mutationType

##### promise [使用参考](http://liubin.org/promises-book/)

> 优点：
>
> 1. 更好的回调、异步处理
> 2. 更好的异常处理
>
> 缺点：
>
> 1. 没有获取状态的方法
> 2. 一个promise一旦执行，结果有且只有两个，resolve(成功)和reject(失败)，不可中断
> 3. 有些浏览器不支持，如需支持要提供polyfill

##### fetch [使用参考](https://github.com/github/fetch)
> 基于promise的网络请求库
>
> 优点：
>
> 1. 不同于基于事件的ajax，fetch是基于promise的。
> 2. 构造请求、回调处理更方便，并支持链式调用
> 3. 同构(可跨浏览器和node服务端使用)方便
>
> 缺点：
>
> 1. 请求一旦发出，不能取消
> 2. 不能设置请求超时时间
> 3. 不能跟踪上传进度，如没有xhr的progress事件
> 4. 有些浏览器不支持，如需支持要提供polyfill

##### 跨域请求解决

> webpack代理转发
>
> 简单配置如下:
>
> 在webpack.dev.config.js配置文件中找到devServer中的proxy:

```js
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    stats: {
      chunks: false,
      children: false,
    },
    // 增加一个key-value, key可为正在表达式, 重启服务后生效
    proxy: {
      '/v2/book/*': {
        target: 'https://api.douban.com',
        changeOrigin: true,
      },
    },
  },
```

#### 其他

1. 如有书写测试性的代码，可以这样:

```jsx
if(__DEV__) {
    // 我是测试代码, 这样正式打包后会自动移除掉这部分代码
}
```

## 项目发布

1. 在`deploy.js`填上七牛部署key

   ```jsx
   qiniu.conf.ACCESS_KEY = '';
   qiniu.conf.SECRET_KEY = '';
   ```

2. 提交代码

3. 执行npm version patch(修复bug)/minor(功能小版本)/major(重要更新)

4. 会在项目根目录下生成dist，将dist/index.html 交由后端渲染即可

5. 可将index.html中静态资源修改成动态配置，以后前端资源更新，后端就无需发布重启了