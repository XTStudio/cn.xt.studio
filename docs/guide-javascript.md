---
author: Pony Cui
title: JavaScript 环境
---

在使用 XT 时，代码将运行在对应的宿主环境上。

## iOS 原生平台

在 iOS 原生平台上，`JavaScript` 代码将运行在 `JavaScriptCore` 中，目前先知在 iOS 9.0 以上版本，可以完整运行所有 ES5 特性功能，在 iOS 10.3 以上版本，可以完整运行的有 ES6 特性功能。

针对 iOS 10.3 以下版本，XT 已经为这些运行环境添加了 Promise Polyfill，你可以放心使用 `Promise` `async / await`。

在语法上，你可以放心使用 ES5 以后的语法，`TypeScript` 会自动将其编译成 ES5。

但是，在类型支持上，你需要自行添加 Polyfill。

## Android 原生平台

在 Android 原生平台上，`JavaScript` 代码将运行在 `V8` 中，该引擎支持所有 ES6 特性功能，大部分 XT 所需要的 JS 特性均已支持。

## Web 平台

在 Web 平台上，`JavaScript` 依赖 `WebView` 的运行环境，具体的 JS 可用性请自行搜索相关网站。

## 跨平台 API

只要你使用的是 XT 提供的 API，框架已经为你抹平大部分的平台差异，只需放心使用即可。