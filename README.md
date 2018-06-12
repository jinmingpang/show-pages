# H5 宣传页

通过简单 yaml 配置，实现 h5 宣传推广页面吗，兼容目前市场上绝大部分手机，高性能，支持开发环境热更新，快速编译与打包构建。

## 目前支持功能

* 开发功能
  * 本地开发服务热更新
  * 支持 less stylus sass 等开发样式代码 `建议使用stylus`
  * 支持 es6 所有特性
  * 支持 art-template 模版渲染
  * 实现完全配置化
  * 可自定义功能
* 页面效果
  * animate css 所有动画功能，和多种配置

## 使用方式

1、 添加依赖

```shell
yarn add show-pages # 添加项目依赖
```

2、 添加开发命令到，package.json

```js
"scripts": { // 开发命令配置
  "serve": "npm run clean && node ../bin/cli serve", // 开发模式，自动热更新
  "build": "npm run clean && node ../bin/cli build", // 打包应用，自动压缩代码
  "clean": "node ../bin/cli clean", // 清除应用缓存文件
}
```

3、添加 app.yaml、page.yaml 配置文件 `具体`[配置](#配置)`信息`

4、启动应用

```shell
yarn run serve # 启动本地服务 默认为 http://localhost:1234
yarn run build # 将代码构建到 dist 目录
```

## 配置

### app.yaml 配置

```yaml
title: hello wrold 3456 # 页面title
keywords: show pages # 页面的关键字 方便 搜索引擎搜索
description: hello show pages # 页面描述 方便 搜索引擎搜索
designWidth: 1080 # 当前页面基准宽度，兼容各种机型， 一般为设计稿宽度， 默认 750
bgm: url # 背景音乐
startIndex: 1 # 打开第几页， 默认 1
background: # 整个 项目背景设置
```

### page.yaml 配置 `每一页配置功能相同`

```yaml
-
  title: wrold # 页面title
  background: # 页面背景设置
    color: red
  hooks: # 页面钩子方法
    onShow: # 页面显示时
    onHide: # 页面显示后
  plugins: [] # 本页面需要支持 动画功能
  doms:
    [dom-key]: # dom 的 class
      postion: [center, middle] # 配置位置 元素 [left, top, bottom, right]
      showtime: 500 # 该dom元素出现在页面中的时间
      innerHTML: # dom元素 的填充内容，支持 art-teplate渲染 或者 纯html内容
        image: true # 为dom自动设置背景图， 支持多种配置， 并自动设置图片宽高
          #1. true # 会自动 选取 `./images/${dom-key}.png`
          #2. http://pathto/xx.{png,gif,jpg} # 加载对应服务器图片
          #3. imgname.{png,gif,jpg} # 加载当前目录下的 `images/${imagename.xxx}
        tpl: # art-teplate 模版
        data: # innerHtml
      hooks: # 元素钩子方法
        onShow: # 元素显示时
        onHide: # 元素隐藏时
      cssanimate: # 支持 aniamte css 所有CSS3动画及配置 https://daneden.github.io/animate.css/
        key: bounceInUp # 动画名称
        duration: 4s # 动画执行的时间
        delay: 1000 # 动画的延迟执行
        timing: # 动画缓动函数
        count: # 动画循环次数， infnite 表示无限循环
        direction: # 属性定义是否应该轮流反向播放动画
```

## 开发注意事项

## 插件开发

## TODO LIST

* [ ] 背景配置
  * [ ] 背景图片
  * [x] 背景颜色
  * [ ] 视频背景
  * [ ] 视差背景效果
* [ ] 背景音乐配置
  * [ ] 不同页面可以配置不同的背景音乐
* [ ] 多种动画效果插件化支持，异步加载
  * [ ] 数字滚动
  * [ ] 轮播图
  * [ ] 数据可视化图表功能
  * [ ] 键盘打字效果
* [ ] 自动部署到 github, 通过 github pages 实现预览功能
* [ ] 优化开发环境编译性能

## 相关 github 项目

* [parcel](https://github.com/parcel-bundler/parcel) 零配置构建工具，可以支持绝大部分文件构建
* [nodePPPT](https://github.com/ksky521/nodePPT) node 实现的，浏览器 ppt
* [impress.js](https://github.com/impress/impress.js) 一款令人惊艳的 3D 效果展示页面的 JS 插件
* [reveal.js](https://github.com/hakimel/reveal.js) 一款非常优秀的，浏览器 ppt，支持非常的多的功能, 提供在线编辑器编辑
