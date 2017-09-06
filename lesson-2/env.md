#环境搭建

## npm+node

1. 去nodejs官网下载对应平台安装包:  [download page](https://nodejs.org/en/download/)

2. 安装nodejs成功后，会对应安装一个[npm包管理器](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

   ```shell
   npm安装各种依赖包，会默认从 http://registry.npmjs.org/ 下载，可能有些包会下载较慢，这时可以指定特定的下载源，如：
   // 将registry指定为淘宝国内镜像站点
   npm config set registry='https://registry.npm.taobao.org/'
   npm install gulp
   or
   npm install gulp --registry=https://registry.npm.taobao.org

   当然你也可以用cnpm替换npm进行nodejs包管理工具, 参考: https://cnpmjs.org/
   ```

3. 最常用的命令

   ```js
   // install，会根据项目跟目录下的package.json文件，进行相关依赖包安装
   npm install
   // install package，安装指定包
   // --save-dev 只在dev环境下有效，--save 在prod环境有效, 默认值: --save
   npm install gulp --save-dev
   npm install gulp --save
   // build, 会对应执行package.json中script申明的build命令
   npm run build
   ```

4. yarn — 更快速、更可靠、更安全的包管理器(推荐)：[使用参考](https://yarnpkg.com/en/docs/usage)

   ```shell
   sudo npm install -g yarn
   ```

## React 环境

1. create-react-app工具 [参考](https://github.com/facebookincubator/create-react-app)

   > 可创建一个基本的react项目，如要作为中型项目管理，你可能需要自己配置: eslint、cssModules、redux等。

   ```js
   // 安装命令行工具
   sudo npm install -g create-react-app

   // 初始化一个项目，注：项目名如多余一个单词，请用短划线连接。
   create-react-app hello-world
   ```

2. generator-react-impression工具 [参考](https://github.com/NewDadaFE/generator-react-impression)

   > 可快速更新符合公司规范的项目架构、代码规范、优化及部署。

   ```js
   // 安装命令行工具
   sudo npm i -g yo generator-react-impression
   // 初始化一个项目
   yo react-impression
   ```

## 开发工具
1. WebStorm [download](https://www.jetbrains.com/webstorm/download/#section=mac)

   > 优点：比较全面的、重量级开发工具，解放手动安装各种插件的烦恼
   >
   > 缺点：占用内存较大

2. Visual Studio Code [download](https://code.visualstudio.com/)

   > 比较轻量级的开发工具，插件安装还是比较方便的，类似的工具：atom、sublimeText3
   >
   > 开发react推荐几个插件：
   >
   > Code runner、Auto Close Tag、Auto Rename Tag、ESlint、npm intellisense、path autocomplete、prettier
