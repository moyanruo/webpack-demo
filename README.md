## jquery-webpack-demo
构建：webpack 4.0 + jquery + router

## 使用

	# 克隆项目
	$ git clone git项目地址

	# 安装 node packages
	$ npm install

	# 启动本地服务
	$ cd 项目目录
	$ npm run dev

	# 测试版本打包
	$ npm run build-test

	# 生产版本打包
	$ npm run build-prod

## 目录结构

```shell

* |--webpack-demo
* |		|--build						webpack 打包配置文件
* |		|--config						api 配置文件
* |		|--dist							打包文件
* |		|--node_modules					node packages
* |		|--src							项目文件
* |			|--assets					静态资源文件
* |				|--fonts				字体文件
* |				|--images				图片
* |				|--scss					样式文件
* |					|--common.scss		公共样式
* |				|--variables.scss		公共样式变量
* |			|--page 					页面
* |				|--components			公共组件
* |				|--router				路由
* |					|--router.js 		路由配置文件
* |				|--utils				工具方法
* |					|--rem.js			js适配
* |				|--index.html			入口文件（项目主页）
* |				|--index.js				入口js
* |				|--index				首页
* |					|--index.html		首页
* |					|--index.js 		js
* |					|--style.scss 		scss
* |				|
* |				|--helpCenter			帮助中心
* |					|--index.html		帮助中心
* |					|--index.js 		js
* |					|--style.scss 		scss
* |				|--about				关于我们
* |					|--index.html		关于我们
* |					|--index.js 		js
* |					|--style.scss 		scss
* |		|--static						静态文件（打包copy用）
* |		|--.babelrc						babel配置文件
* |		|--.editorconfig				编辑器配置文件
* |		|--.eslintrc.js					eslint配置文件
* |		|--package.json					package.json
* |		|--.gitignore					git忽略文件配置
* |		|--README.md					项目文档

```
