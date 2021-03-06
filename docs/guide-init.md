---
author: Pony Cui
title: 初始化工程
---

## 安装依赖

在初始化工程之前，请确认系统环境是否已经满足需要。

### NodeJS

打开命令行，输入以下命令

```shell
node --version
```

正常情况下，会输出一个版本号，如 ```v8.11.1```，如果没有版本号输出，或者版本号低于 ```8.0.0```，请至 [NodeJS](https://nodejs.org/) 选择合适的版本安装。

### NPM

npm 已经随 NodeJS 附带安装，但对于中国用户，npm 会较慢，建议安装 cnpm。

cnpm 是淘宝搭建的 npm 镜像源，cnpm 的安装教程请[阅读此处](http://npm.taobao.org)。

### TypeScript

使用以下命令全局安装 ```typescript```。

```shell
npm i typescript -g
```

### http-server

使用以下命令全局安装 ```http-server```。

```shell
npm i http-server -g
```

## 创建工程

自行创建一个工程目录，打开命令行并进入这个目录，输入命令。

```shell
> npm init
```

接下来，npm 会询问一些工程配置信息，全部回车即可。接着，输入命令。

```shell
> npm i xt-studio --save
> ./node_modules/.bin/xt init
```

如果没有任何报错信息，代表工程已经创建完毕。

## 编译并运行工程

### 启动调试器

在命令行中输入以下命令，启动调试器。

```shell
> npm run debug
```

如有报错信息，请检查是否有终端重复运行这一命令，或检查 8090 端口是否被占用。

### 启动 HTTP 服务

> 当 URL 带有 ?debug 关键字时，会启用 Debug 模式，当代码变动时，会自动刷新页面。

1. 在新的命令行窗口中输入命令 ```npm run web``` ，启动 HTTP 服务器。
2. 打开 Chrome 浏览器，打开 http://127.0.0.1:8080/?debug 进入预览界面

## 尝试修改工程文件

使用文本编程器，修改 *src/main.ts* 文件，保存，预览界面会自动刷新，至此，工程创建完毕。

## 编译命令一览

* 构建并输出构建文件至所有平台目录下。

```shell
npm run build 
```

* 构建并观察文件变化，并输出构建文件至所有平台目录下。

```shell
npm run build 
```

* 开启调试器，构建文件不会输出至平台目录。

```shell
npm run debug
```

* 打开 Xcode 工程

```shell
npm run ios
```

* 打开 Android 工程

```shell
npm run android
```

* 打开 Web 预览页

```shell
npm run web
```

## 下一步

* 使用 [VSCode 进行开发](guide-vscode.md)