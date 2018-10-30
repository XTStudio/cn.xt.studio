---
author: Pony Cui
title: 在 Chrome 中调试应用
---

XT 支持在浏览器中运行，你可以使用 Chrome / Safari 或者手机浏览器打开 Debug 页面。

## 启动本地 HTTP 服务器

先在命令行中定位到工程目录，然后输入命令：

```shell
cd platform/web && http-server -c-1
```

终端会输出类似信息：

```shell
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8083
  http://172.20.10.6:8083
Hit CTRL-C to stop the server
```

如提示所言，在 Chrome 或者目标浏览器上打开上述地址即可预览应用。

## Debug 模式

在非 Debug 模式下，XT 会加载 ```platform/web/app.js``` 脚本，并运行。

在 Debug 模式下，XT 会尝试连接到调试器，并加载调试器中的脚本，同时监听调试器脚本是否存在更新，按需重载。

要启用 Debug 模式，只需要在 URL 后添加 ```?debug``` 参数即可。

```
http://127.0.0.1:8080/?debug
```

## 模拟移动设备

开启 Chrome 开发者控制台，选择『Toggle Device Toolbar』按钮就可以模拟移动设备了。

## 监听日志

在非 Debug 模式下，你可以打开 Chrome 开发者控制台，在 Console 选项卡查看日志。

在 Debug 模式下，在执行 ```npm run debug``` 的终端中，会打印接收到的日志。

## 断点调试

暂不支持断点调试，请使用打 Log 的方式调试应用。