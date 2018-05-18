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
title: hello wrold 3456
keywords: show pages
description: hello show pages
designWidth: 1080
bgm: url
startIndex: 1 #
```

### page.yaml 配置 `每一页配置功能相同`

```yaml
-
  background:
    color: red
  doms:
    [dom-key]:
      image: true
      postion: [center, middle]
      cssanimate:
        key: bounceInUp
        duration: 4s
        showtime: 500
        delay: 1000
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

* [parcel-bundle](x) 零配置构建工具，可以支持绝大部分文件构建
* [node-ppt](x) node 实现的，浏览器 ppt
* [impress.js](x) 一款令人惊艳的 3D 效果展示页面的 JS 插件
* [reserval.js](x) 一款非常优秀的，浏览器 ppt，支持非常的多的功能
